// pages/addFunction/addFunction.js

const { getFundInfo } = require("../../network/netManager");

var globalData = getApp().globalData;

Page({

  data: {
    fundNamePreview: '',
    error: true,
    contentHeight: 500
  },

  onLoad: function (options) {
    var contentH = wx.getSystemInfoSync().windowHeight;
    this.setData({
      contentHeight: contentH
    })
  },

  bindInput: function (e) {
    var fundCode = e.detail.value;
    if (fundCode.length === 6) {
      var _this = this;
      getFundInfo(fundCode, function (data) {
        console.log(data)
        if (data.length > 0) {
          _this.setData({
            fundNamePreview: data[0].name,
            error: false
          })
        } else {
          _this.setData({
            fundNamePreview: '未找到该基金，请检查基金代码是否正确',
            error: true
          })
        }
      }, function (fail) {
        _this.setData({
          fundNamePreview: '未找到该基金，请检查基金代码是否正确',
          error: true
        })
      })
    } else {
      this.setData({
        fundNamePreview: '',
        error: true
      })
    }
  },

  formSubmit: function(e) {
    console.log(e.detail.value)
    var fundCode = e.detail.value.fundCode;
    var fundCodes = globalData.fundCodes;
    if(!!fundCodes) {
      var fundArray = fundCodes.split(',');
      if(!fundArray.includes(fundCode)){
        console.log(fundArray);
        fundArray.push(fundCode);
        var newCodes = fundArray.join(',');
        globalData.fundCodes = newCodes;
        wx.showToast({
          title: '添加成功',
          success: function(){
            wx.navigateBack()
          }
        })
      }else{
        wx.showToast({
          title: '该基金已在自选列表',
          icon: 'none'
        })
      }
    }else{
      globalData.fundCodes = newCodes;
    }
  }

})

