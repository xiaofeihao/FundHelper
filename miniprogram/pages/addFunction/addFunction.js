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

  formSubmit: function (e) {
    var fundCode = e.detail.value.fundCode;
    var fundShare = e.detail.value.fundShare;
    var fundCodes = globalData.fundCodes;
    if (!!fundCodes) {
      var fundArray = fundCodes.split(',');
      if (!fundArray.includes(fundCode)) {
        fundArray.push(fundCode);
        var newCodes = fundArray.join(',');
        globalData.fundCodes = newCodes;
        if (!!fundShare && fundShare > 0) {
          globalData.fundShare[fundCode] = Number(fundShare);
        } else {
          globalData.fundShare[fundCOde] = 0;
        }
        console.log(newCodes, globalData.fundShare)
        this.storeGlobalData();
      } else {
        wx.showToast({
          title: '该基金已在自选列表',
          icon: 'none'
        })
      }
    } else {
      globalData.fundCodes = fundCode;
      if (!!fundShare && Number(fundShare) > 0) {
        globalData.fundShare[fundCode] = fundShare;
      } else {
        globalData.fundShare[fundCode] = 0;
      }
      this.storeGlobalData();
    }
  },

  storeGlobalData: function () {
    wx.setStorage({
      data: globalData.fundCodes,
      key: 'fundCodes',
    });
    wx.setStorage({
      data: globalData.fundShare,
      key: 'fundShare',
    });
    wx.showLoading({
      title: '正在添加',
      success: function () {
        wx.showToast({
          title: '添加成功',
          success: function () {
            wx.navigateBack()
          }
        })
      }
    });
  }

})

