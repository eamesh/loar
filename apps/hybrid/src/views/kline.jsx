import { defineComponent, onMounted, reactive, ref, watch, computed } from 'vue'
import { KLineChartPro } from '@loar/klinecharts-pro'
import '@loar/klinecharts-pro/dist/klinecharts-pro.css'
import { Button, Cell, ConfigProvider, Field, Form, Popup, Stepper, showToast, showLoadingToast, showSuccessToast, showFailToast } from 'vant'
import Favorite from '@/assets/images/kline/icon_01.png'
import FavoriteCheck from '@/assets/images/kline/icon_02.png'
import { KlineDatafeed } from './kline-datafeed'
import { useRoute } from 'vue-router'
import axios from 'axios'
import classNames from 'classnames'

export default defineComponent({
  created () {
    window.getWebviewData = this.reciveApp
  },
  setup () {
    const route = useRoute()
    const env = ref()
    const chart = ref()
    const popupStatus = ref(false)
    const stockRef = ref({})
    const formData = reactive({
      price: '',
      code: '',
      amount: '',
      market: '',
      mode: 0,
      type: 0,
      stopLoss: '',
      takeProfit: ''
    })
    const themeVars = reactive({
      CellGroupInsetPadding: 0,
      CellFontSize: '14rpx'
      // CellVerticalPadding: 0,
      // VellHorizontalPadding: 0,
    })
    const favoriteRef = ref(false)
    const modeRef = computed(() => formData.mode)
    const memberRef = ref({
      balance: 0
    })

    function reciveApp (data) {
      alert(123)
      console.log('reciveApp', data)
    }
    document.addEventListener('UniAppJSBridgeReady', () => {
      console.log(uni)
      uni.postMessage({
        data: {
          action: 'message'
        }
      })
      uni.getEnv((res) => {
        console.log(`当前环境：${JSON.stringify(res)}`)
        env.value = JSON.stringify(res)
      })
    })

    async function getStock () {
      console.log(route.query, route.params)
      return await axios.get(`${process.env.VUE_APP_KLINE_HOST}/api/v1/stock/${route.query.id}/panel`)
    }

    async function getProfile () {
      if (route.query.token) {
        const result = await axios.get(`${process.env.VUE_APP_KLINE_HOST}/api/v1/member`, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${decodeURIComponent(route.query.token)}`
          }
        })
        memberRef.value.balance = result.data.balance
      }
    }

    async function checkFavorite () {
      try {
        const result = await axios.get(`${process.env.VUE_APP_KLINE_HOST}/api/v1/stock/${stockRef.value.id}/favorite`, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${decodeURIComponent(route.query.token)}`
          }
        })
        favoriteRef.value = result.data
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }

    // eslint-disable-next-line no-unused-vars
    async function favorite () {
      const status = favoriteRef.value ? 0 : 1
      try {
        await axios.post(`${process.env.VUE_APP_KLINE_HOST}/api/v1/stock/${stockRef.value.id}/favorite`, {
          status
        }, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${decodeURIComponent(route.query.token)}`
          }
        })

        checkFavorite()
      } catch (error) {
        console.log(error)
      }
    }

    watch(() => stockRef.value, () => {
      if (stockRef.value) {
        checkFavorite()
      }
    })

    const priceComputed = computed(() => {
      const price = (formData.amount * formData.price).toFixed(3)
      const fee = (price * stockRef.value.marketResult?.feeRate || 0).toFixed(3)
      return {
        price: price,
        fee
      }
    })

    async function init () {
      await getProfile()
      const result = await getStock()
      const stock = stockRef.value = result.data
      formData.price = stock.detail?.price
      formData.market = stock.market
      formData.code = stockRef.value.id
      chart.value = new KLineChartPro({
        container: document.getElementById('container'),
        // 初始化标的信息
        symbol: {
          name: stock.name,
          shortName: stock.symbol,
          ticker: stock.symbol,
          priceCurrency: stock.marketResult.currency,
          id: stock.id
        },
        // styles: 'candle_solid',
        drawingBarVisible: false,
        // 初始化周期
        period: { multiplier: 1, timespan: 'minute', text: '1m' },
        periods: [
          { multiplier: 1, timespan: 'minute', text: '1m' },
          { multiplier: 5, timespan: 'minute', text: '5m' },
          { multiplier: 15, timespan: 'minute', text: '15m' },
          { multiplier: 60, timespan: 'minute', text: '1H' },
          { multiplier: 120, timespan: 'minute', text: '2H' },
          { multiplier: 'day', timespan: 'day', text: 'D' }
        ],
        subIndicators: ['VOL', 'MACD'],
        // 这里使用默认的数据接入，如果实际使用中也使用默认数据，需要去 https://polygon.io/ 申请 API key
        datafeed: new KlineDatafeed()
      })
    }

    function switchMode (mode) {
      formData.mode = mode
    }

    async function onSubmit (value) {
      console.log(value)
      if (!value.amount || value.amount < 1) {
        showToast('最小單位1')
        return
      }
      showLoadingToast({
        message: '下单中...',
        forbidClick: true
      })
      try {
        await axios.post(`${process.env.VUE_APP_KLINE_HOST}/api/v1/stock/buy`, formData, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${decodeURIComponent(route.query.token)}`
          }
        })

        showSuccessToast('下单成功')
      } catch (error) {
        console.log(error)
        const message = error.response.data?.message || '下单失败'
        showFailToast(message)
      }
    }

    onMounted(() => {
      init()
    })

    function openPopup (mode) {
      popupStatus.value = true
      switchMode(mode)
    }

    return {
      env,
      themeVars,
      popupStatus,
      openPopup,
      reciveApp,
      stockRef,
      favorite,
      favoriteRef,
      onSubmit,
      formData,
      switchMode,
      modeRef,
      priceComputed,
      memberRef
    }
  },
  render () {
    const { themeVars, openPopup, stockRef, favoriteRef, favorite, switchMode, priceComputed, memberRef } = this
    return (
      <div className="w-screen h-screen bg-white overflow-hidden flex flex-col">
        <div className="flex-1 w-full overflow-auto">
          <div className="flex flex-col justify-start items-start w-full px-4 py-4 gap-y-3">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="text-md font-mono">{stockRef.name}</div>
              {
                favoriteRef ? <img src={FavoriteCheck} className="w-6" onClick={favorite} /> : <img src={Favorite} className="w-6" onClick={favorite}/>
              }

              {/* <img src={FavoriteCheck} className="w-6" /> */}
            </div>
            <div className="flex flex-row justify-start items-center gap-x-2">
              <div className="bg-[#3395FF] text-white text-[10px] px-[6px] py-[2px] rounded-sm">{ stockRef.marketResult?.code }</div>
              <div className="text-[#999] text-[14px]">{ stockRef.symbol }</div>
            </div>
            <div className="flex flex-row justify-start items-center">
              <div className="text-[#00c537] text-md font-semibold font-mono">{ stockRef.detail?.price }</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-3">
              <div className={classNames(['text-[10px] font-mono', parseFloat(stockRef.detail?.chg) >= 0 ? 'text-[#00c537] ' : ''])}>{parseFloat(stockRef.detail?.chg) > 0 ? '+' : ''}{stockRef.detail?.chg}</div>
              <div className={classNames(['text-[10px] font-mono', parseFloat(stockRef.detail?.chg) >= 0 ? 'text-[#00c537] ' : ''])}>{parseFloat(stockRef.detail?.chg) > 0 ? '+' : ''}{stockRef.detail?.chgV}</div>
            </div>

            <div className="flex flex-row text-[12px] text-[#999] w-full mt-2">
              <div className="basis-1/3">
                <div className="flex flex-col justify-between items-start gap-y-3">
                  <div>开 {(+stockRef.detail?.open).toFixed(3)}</div>
                  <div>昨收 {(+stockRef.detail?.lastClose).toFixed(3)}</div>
                </div>
              </div>
              <div className="basis-1/3">
                <div className="flex flex-col justify-between items-center gap-y-3">
                  <div>高 {(+stockRef.detail?.high).toFixed(3)}</div>
                  <div>低 {(+stockRef.detail?.low).toFixed(3)}</div>
                </div>
              </div>
              <div className="basis-1/3">
                <div className="flex flex-col justify-between items-end gap-y-3">
                  <div>Vol {(+stockRef.detail?.volume)}</div>
                  <div>T/O {(+stockRef.detail?.amount)}</div>
                </div>
              </div>

            </div>
          </div>
          <div id="container" className="w-full aspect-[3/4]"></div>
          {/* <div className="p-4">
            <Tabs>
              <Tab title="訂單簿" name="a">
                <div className="flex flex-row gap-x-8 mt-6">
                  <div className="basis-1/2">
                    <div className="flex flex-col gap-y-2">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-x-3 items-center">
                          <div className="px-[6px] py-[2px] rounded text-xs text-white bg-[#00c537]">
                            1
                          </div>
                          <div className="text-[#00c537] text-xs font-mono font-semibold">694.720</div>
                        </div>
                        <div className="text-[#00c537] text-xs font-mono font-semibold">25</div>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-x-3 items-center">
                          <div className="px-[6px] py-[2px] rounded text-xs text-white bg-[#00c537]">
                            2
                          </div>
                          <div className="text-[#00c537] text-xs font-mono font-semibold">694.720</div>
                        </div>
                        <div className="text-[#00c537] text-xs font-mono font-semibold">25</div>
                      </div>
                    </div>

                  </div>
                  <div className="basis-1/2">
                    <div className="flex flex-col gap-y-2">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-x-3 items-center">
                          <div className="px-[6px] py-[2px] rounded text-xs text-white bg-[#e60101]">
                            1
                          </div>
                          <div className="text-[#e60101] text-xs font-mono font-semibold">694.720</div>
                        </div>
                        <div className="text-[#e60101] text-xs font-mono font-semibold">25</div>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-x-3 items-center">
                          <div className="px-[6px] py-[2px] rounded text-xs text-white bg-[#e60101]">
                            2
                          </div>
                          <div className="text-[#e60101] text-xs font-mono font-semibold">694.720</div>
                        </div>
                        <div className="text-[#e60101] text-xs font-mono font-semibold">25</div>
                      </div>
                    </div>
                  </div>

                </div>
              </Tab>
              <Tab title="價格量" name="b">
                <div className="flex flex-col gap-y2">
                  <div className="flex flex-row text-sm mt-3">
                    <div className="basis-1/3">
                      <div className="flex justify-start items-start">時間</div>
                    </div>
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center">成交價格</div>
                    </div>
                    <div className="basis-1/3">
                      <div className="flex justify-end items-end">Vol</div>
                    </div>
                  </div>

                  <div className="flex flex-row text-sm mt-3">
                    <div className="basis-1/3">
                      <div className="flex justify-start items-start">02/08 03:32:47</div>
                    </div>
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center">15743.734</div>
                    </div>
                    <div className="basis-1/3">
                      <div className="flex justify-end items-end">33.1k</div>
                    </div>
                  </div>
                  <div className="flex flex-row text-sm mt-3">
                    <div className="basis-1/3">
                      <div className="flex justify-start items-start">02/08 03:32:47</div>
                    </div>
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center">15743.734</div>
                    </div>
                    <div className="basis-1/3">
                      <div className="flex justify-end items-end">33.1k</div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>

          </div> */}
        </div>

        <div
          className="w-screen flex-shrink-0 bg-white flex justify-center items-center border-t"
          style={{
            paddingBottom: 'env(safe-area-inset-bottom)',
            height: 'calc(5rem + env(safe-area-inset-bottom))'
          }}
        >
          <div className="flex flex-row justify-between items-center gap-x-3 w-full px-4">
            <Button round color="#00c537" block onClick={() => openPopup(0)}>開多</Button>
            <Button round color="#e60101" block onClick={() => openPopup(1)}>開空</Button>
          </div>
        </div>

        <Popup position="bottom" round v-model:show={this.popupStatus}>
          <div className="flex py-4 bg-white w-full">
            <ConfigProvider themeVars={themeVars} className="w-full">
              <Form className="w-full" onSubmit={this.onSubmit}>
                <Cell border={false} center title="股票">
                  <div className="text-lg text-black">{ stockRef.name }</div>
                </Cell>
                <Cell border={false} center title="側面">
                  <div className="flex flex-row gap-x-2 justify-end">
                    <div className={classNames(['w-[50px] text-sm py-1 rounded text-center', this.modeRef === 0 ? 'bg-[#00c537] text-white ' : 'bg-[#f9f9f9] text-[#999]]'])} onClick={() => switchMode(0)}>開多</div>
                    <div className={classNames(['w-[50px] text-sm py-1 rounded text-center', this.modeRef === 1 ? 'bg-[#e60101] text-white ' : 'bg-[#f9f9f9] text-[#999]]'])} onClick={() => switchMode(1)}>開空</div>
                  </div>
                </Cell>
                <Cell border={false} center title="型别">
                  <div className="flex flex-row gap-x-2 justify-end">
                    <div className={classNames(['w-[50px] text-sm py-1  rounded text-center', this.formData.type === 0 ? 'text-white bg-[#3395FF]' : 'text-[#999] bg-[#f9f9f9]'])} onClick={() => {
                      this.formData.type = 0
                    }}>市場</div>
                    <div className={classNames(['w-[50px] text-sm py-1 rounded text-center', this.formData.type === 1 ? 'text-white bg-[#3395FF]' : 'text-[#999] bg-[#f9f9f9]'])} onClick={() => {
                      this.formData.type = 1
                    }}>限制</div>
                  </div>
                </Cell>
                <Cell border={false} center title="數量">
                  <Field size="small" inputAlign="right" type="number" name="amount" v-model={this.formData.amount} placeholder="最小單位1" />
                </Cell>
                {
                  this.formData.type === 1 && <Cell border={false} center title="订单价格">
                  <Field size="small" inputAlign="right" type="number" name="price" v-model={this.formData.price} placeholder="最小單位1" />
                </Cell>
                }
                <Cell border={false} center title="價格">
                  <div className="text-black">{ priceComputed.price }</div>
                </Cell>
                <Cell border={false} center title="費用">
                  <div className="text-black">{ priceComputed.fee }</div>
                </Cell>
                <Cell border={false} center title="止盈">
                  <Stepper input-width="100px" button-size="22px" v-model={this.formData.takeProfit} min={0} allowEmpty step="0.001" onPlus={() => {
                    if (this.formData.takeProfit === '') {
                      this.formData.takeProfit = this.stockRef.detail.price
                    }
                  }} onOverlimit={() => {
                    if (this.formData.takeProfit === '') {
                      this.formData.takeProfit = this.stockRef.detail.price
                    }
                  }}/>
                </Cell>
                <Cell border={false} center title="停損">
                  <Stepper input-width="100px" button-size="22px" v-model={this.formData.stopLoss} min={0} allowEmpty step="0.001" onPlus={() => {
                    if (this.formData.stopLoss === '') {
                      this.formData.stopLoss = this.stockRef.detail.price
                    }
                  }} onOverlimit={() => {
                    if (this.formData.stopLoss === '') {
                      this.formData.stopLoss = this.stockRef.detail.price
                    }
                  }}/>
                </Cell>
                <Cell border={false} center title="餘額">
                  <div className="text-black">{memberRef.balance} USDT</div>
                </Cell>
                <div className="pt-6 px-4">
                  <Button round block color={this.modeRef === 0 ? '#00c537' : '#e60101'} nativeType="submit">
                    <div className="text-md">下買單</div>
                  </Button>
                </div>
              </Form>
            </ConfigProvider>
          </div>
        </Popup>
      </div>
    )
  }
})
