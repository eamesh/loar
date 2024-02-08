import { defineComponent, onMounted, reactive, ref } from 'vue'
import { DefaultDatafeed, KLineChartPro } from '@loar/klinecharts-pro'
import '@loar/klinecharts-pro/dist/klinecharts-pro.css'
import { Button, Cell, CellGroup, ConfigProvider, Field, Form, Popup, Step, Stepper, Tab, Tabs, Tag } from 'vant'
import Favorite from '@/assets/images/kline/icon_01.png'
import FavoriteCheck from '@/assets/images/kline/icon_02.png'

console.log(Favorite)
export default defineComponent({
  setup() {
    const env = ref()
    const chart = ref()
    const popupStatus = ref(false)
    const themeVars = reactive({
      CellGroupInsetPadding: 0,
      CellFontSize: '14rpx',
      // CellVerticalPadding: 0,
      // VellHorizontalPadding: 0,
    })
    document.addEventListener('UniAppJSBridgeReady', () => {
      console.log(uni)
      uni.postMessage({
        data: {
          action: 'message',
        },
      })
      uni.getEnv((res) => {
        console.log(`当前环境：${JSON.stringify(res)}`)
        env.value = JSON.stringify(res)
      })
    })

    onMounted(() => {
      chart.value = new KLineChartPro({
        container: document.getElementById('container'),
        // 初始化标的信息
        symbol: {
          exchange: 'XNYS',
          market: 'stocks',
          name: 'Alibaba Group Holding Limited American Depositary Shares, each represents eight Ordinary Shares',
          shortName: 'BABA',
          ticker: 'BABA',
          priceCurrency: 'usd',
          type: 'ADRC',
        },
        drawingBarVisible: false,
        // 初始化周期
        period: { multiplier: 15, timespan: 'minute', text: '15m' },
        periods: [
          { multiplier: 1, timespan: 'minute', text: '1m' },
          { multiplier: 5, timespan: 'minute', text: '5m' },
          { multiplier: 15, timespan: 'minute', text: '15m' },
          { multiplier: 1, timespan: 'hour', text: '1H' },
          { multiplier: 1, timespan: 'day', text: 'D' },
          { multiplier: 1, timespan: 'week', text: 'W' },
          { multiplier: 1, timespan: 'month', text: 'M' },
        ],
        // 这里使用默认的数据接入，如果实际使用中也使用默认数据，需要去 https://polygon.io/ 申请 API key
        datafeed: new DefaultDatafeed(`IR3qS2VjZ7kIDgnlqKxSmCRHqyBaMh9q`),
      })
    })

    function openPopup() {
      popupStatus.value = true
    }

    return {
      env,
      themeVars,
      popupStatus,
      openPopup,
    }
  },
  render() {
    const { themeVars, openPopup } = this
    return (
      <div className="w-screen h-screen bg-white overflow-hidden flex flex-col">
        <div className="flex-1 w-full overflow-auto">
          <div className="flex flex-col justify-start items-start w-full px-4 py-4 gap-y-3">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="text-md font-mono">NDX</div>
              <img src={Favorite} className="w-6" />
              {/* <img src={FavoriteCheck} className="w-6" /> */}
            </div>
            <div className="flex flex-row justify-start items-center gap-x-2">
              <div className="bg-[#3395FF] text-white text-[10px] px-[6px] py-[2px] rounded-sm">US</div>
              <div className="text-[#999] text-[14px]">NDX</div>
            </div>
            <div className="flex flex-row justify-start items-center">
              <div className="text-[#00c537] text-md font-semibold font-mono">15757.576</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-x-3">
              <div className="text-[#00c537] text-[10px] font-mono">+143.586</div>
              <div className="text-[#00c537] text-[10px] font-mono">+0.913%</div>
            </div>

            <div className="flex flex-row text-[12px] text-[#999] w-full mt-2">
              <div className="basis-1/3">
                <div className="flex flex-col justify-between items-start gap-y-3">
                  <div>开 145123.213</div>
                  <div>昨收 12435123.213</div>
                </div>
              </div>
              <div className="basis-1/3">
                <div className="flex flex-col justify-between items-center gap-y-3">
                  <div>高 1423131.123</div>
                  <div>低 123121.222</div>
                </div>
              </div>
              <div className="basis-1/3">
                <div className="flex flex-col justify-between items-end gap-y-3">
                  <div>Vol 460.7M</div>
                  <div>T/O 7.2T</div>
                </div>
              </div>

            </div>
          </div>
          <div id="container" className="w-full aspect-[3/4]"></div>
          <div className="p-4">
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

          </div>
        </div>

        <div
          className="w-screen flex-shrink-0 bg-white flex justify-center items-center border-t"
          style={{
            paddingBottom: 'env(safe-area-inset-bottom)',
            height: 'calc(5rem + env(safe-area-inset-bottom))',
          }}
        >
          <div className="flex flex-row justify-between items-center gap-x-3 w-full px-4">
            <Button round color="#00c537" block onClick={() => openPopup()}>開多</Button>
            <Button round color="#e60101" block onClick={() => openPopup()}>開空</Button>
          </div>
        </div>

        <Popup position="bottom" round v-model:show={this.popupStatus}>
          <div className="flex py-4 bg-white w-full">
            <ConfigProvider themeVars={themeVars} className="w-full">
              <Form className="w-full">
                <Cell border={false} center title="股票">
                  <div className="text-lg text-black">NDX</div>
                </Cell>
                <Cell border={false} center title="侧面">
                  <div className="flex flex-row gap-x-2 justify-end">
                    <div className="w-[50px] text-white text-sm py-1 bg-[#00c537] rounded text-center">开多</div>
                    <div className="w-[50px] text-[#999]] text-sm py-1 bg-[#f9f9f9] rounded text-center">开多</div>
                  </div>
                </Cell>
                <Cell border={false} center title="型别">
                  <div className="flex flex-row gap-x-2 justify-end">
                    <div className="w-[50px] text-white text-sm py-1 bg-[#3395FF] rounded text-center">市场</div>
                    <div className="w-[50px] text-[#999] text-sm py-1 bg-[#f9f9f9] rounded text-center">限制</div>
                  </div>
                </Cell>
                <Cell border={false} center title="数量">
                  <Field value="阿萨德" size="small" inputAlign="right" type="number" name="name" placeholder="最小单位1" />
                </Cell>
                <Cell border={false} center title="订单价格">
                  <Field value="阿萨德" size="small" inputAlign="right" type="number" name="name" placeholder="最小单位1" />
                </Cell>
                <Cell border={false} center title="价格">
                  <div className="text-black">0.000</div>
                </Cell>
                <Cell border={false} center title="费用">
                  <div className="text-black">0.000</div>
                </Cell>
                <Cell border={false} center title="止盈">
                  <Stepper input-width="100px" button-size="22px" />
                </Cell>
                <Cell border={false} center title="停损">
                  <Stepper input-width="100px" button-size="22px" />
                </Cell>
                <Cell border={false} center title="余额">
                  <div className="text-black">221.2313213USD</div>
                </Cell>
                <div className="pt-6 px-4">
                  <Button round block color="#00c537">
                    <div className="text-md">下买单</div>
                  </Button>
                </div>
              </Form>
            </ConfigProvider>
          </div>
        </Popup>
      </div>
    )
  },
})
