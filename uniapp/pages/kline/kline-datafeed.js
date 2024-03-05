import dayjs from '../../node_modules/dayjs/esm/index.js'
import config from '../../config/index.js'
let timer = null
let first = "";
export class KlineDatafeed {
  // eslint-disable-next-line no-useless-constructor
  constructor () {}
  /**
   * 模糊搜索标的
   * 在搜索框输入的时候触发
   * 返回标的信息数组
   */
  searchSymbols (search) {
    // 根据模糊字段远程拉取标的数据
  }

  /**
   * 获取历史k线数据
   * 当标的和周期发生变化的时候触发
   *
   * 返回标的k线数据数组
   */
  async getHistoryKLineData (symbol, period, from, to) {
		console.log(period, from, to)
		// let key = `${period.multiplier}_${period.text}`
		
		// return []
   //  try {
   //    console.log(symbol, period, from, to)
      // const now = dayjs()
      // const start = now.subtract(30, 'day').unix()
      // const end = now.unix()
   //    // 完成数据请求
			// // const results = await http({
			// // 	url: `/kline/symbol`,
			// // 	method: 'POST',
			// // 	data: {
			// // 		id: symbol.id,
			// // 		level: period.multiplier,
			// // 		start,
			// // 		end
			// // 	}
			// // })
			
			if (!symbol.id) return []
			const data = {
				id: symbol.id,
				level: period.timespan,
				start: from,
				end: to,
				min: period.multiplier
			}
			
			// if(first === key) {
			// 	data.start = from;
			// 	data.end = to;
			// }
      const response = await fetch(`${config.api}/kline/symbol`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        method: 'POST'
      })
			// console.log(response)
      // console.log(response)
      const results = await response.json()
			// console.log(results)
			// first = key
	 // return [];
   //    // console.log(results)
      const tmp = await (results || []).map((data) => ({
        timestamp: +data.time * 1000,
        open: +data.open,
        high: +data.high,
        low: +data.low,
        close: +data.close,
        volume: +data.volume,
        turnover: +data.amount
      }))
			
			console.log(tmp)
			return tmp
   //  } catch (error) {
			// return []
   //  }
  }

  /**
   * 订阅标的在某个周期的实时数据
   * 当标的和周期发生变化的时候触发
   *
   * 通过callback告知图表接收数据
   */
  async subscribe (symbol, period, callback) {
		try{
			clearInterval(timer)
			timer = setInterval(async () => {
				console.log('sub', symbol, period, callback)
				const data = {
					id: symbol.id,
					level: period.timespan,
					// start: from,
					// end: to,
					min: period.multiplier
				}
				
				const response = await fetch(`${config.api}/kline/symbol`, {
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data),
					method: 'POST'
				})
				
				const results = await response.json()
						
				if (Array.isArray(results)) {
						 (results || []).forEach(data => {
							 // eslint-disable-next-line node/no-callback-literal
							 callback({
								 timestamp: +data.time * 1000,
								 open: +data.open,
								 high: +data.high,
								 low: +data.low,
								 close: +data.close,
								 volume: +data.volume,
								 turnover: +data.amount
							 })
						 })
				} else {
					callback([])
				}
			}, 1000)
		}catch(e){
			//TODO handle the exception
		}
   //  try {
			// clearInterval(timer)
   //    // 完成ws订阅或者http轮询
   //    timer = setInterval(async function () {
   //      console.log(symbol, period)
   //      // const now = dayjs()
   //      // const start = now.subtract(30, 'day').unix()
   //      // const end = now.unix()
   //      // 完成数据请求
			// 	const response = await fetch(`${config.api}/kline/symbol?num=10`, {
			// 	  headers: {
			// 	    'Content-Type': 'application/json'
			// 	  },
			// 	  body: JSON.stringify({
			// 	    id: symbol.id,
			// 	    level: 'min',
			// 	    // start,
			// 	    // end,
			// 			min: 1
			// 	  }),
			// 	  method: 'POST'
			// 	})

   //      // console.log(response)

   //      const results = await response.json()
   //      console.log(results)
   //      if (Array.isArray(results)) {
   //        (results || []).forEach(data => {
   //          // eslint-disable-next-line node/no-callback-literal
   //          callback({
   //            timestamp: +data.Date * 1000,
   //            open: +data.Open,
   //            high: +data.High,
   //            low: +data.Low,
   //            close: +data.Close,
   //            volume: +data.Volume,
   //            turnover: +data.Amount
   //          })
   //        })
   //      }

   //    // (results || []).map((data) => {
   //    //   callback({
   //    //     timestamp: +data.Date * 1000,
   //    //     open: +data.Open,
   //    //     high: +data.High,
   //    //     low: +data.Low,
   //    //     close: +data.Close,
   //    //     volume: +data.Volume,
   //    //     turnover: +data.Amount
   //    //   })
   //    // })
   //    }, 3000)
   //  } catch (error) {
			// return []
   //  }
  }

  /**
   * 取消订阅标的在某个周期的实时数据
   * 当标的和周期发生变化的时候触发
   *
   */
  unsubscribe (symbol, period) {
    // 完成ws订阅取消或者http轮询取消
  }
}
