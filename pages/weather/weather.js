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
            var weatherInfo = res.data.retData;
            that.setData({
              city: weatherInfo.city,
              fengli: weatherInfo.today.fengli,
              forecast: weatherInfo.forecast,
              intro: weatherInfo.today.index,
            })
          },
          fail: function (err) {
            console.log(JSON.stringify(err))
          }
        })


  },
  



})
