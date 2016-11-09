//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    city: "-",
    fengli: '-',
    forecast: []
  },
  
  
  
  
  
  
    weather: {
      request: function () {
        
      },
      analysisData: function (data) {
        console.log("analysisData")
      }
    },
  
  
  
  
  onLoad: function () {

    var that = this

  wx.request({
          url: 'https://apis.baidu.com/apistore/weatherservice/recentweathers',
          data:{
            cityid: '101020100'
          },
          header:{ 
            'content-type': 'application/json',
            'apikey': 'b7361685b2ad57891845773c8fc56458'
          },
          method:"GET",
          success: function (res) {
            var weatherInfo = res.data.retData
            var today = weatherInfo.today
            console.log(today)
            that.setData({
              city: weatherInfo.city,
              fengli: weatherInfo.today.fengli,
              forecast: weatherInfo.forecast,
              intro: today.index,
              weatherdetails: [{title: '日期', detail: today.date},
                              {title: '平均温度', detail: today.curTemp},
                              {title: '风向', detail: today.fengxiang},
                              {title: '风力', detail: today.fengli},
                              {title: '最高温度', detail: today.hightemp},
                              {title: '最低温度', detail: today.lowtemp},
                              {title: '类型', detail: today.type}],
            })
          },
          fail: function (err) {
            console.log(JSON.stringify(err))
          }
        })


  },
  



})
