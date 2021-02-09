//index.js
const { getFundInfo } = require("../../network/netManager.js");
const app = getApp()

Page({
  data: {
    titles: ['自选', '行情', '推荐'],
    current: 0,
    contentHeight: 0,
    fundData: [],
    showLoading: true
  },

  taptab(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      current: index
    })
  },
  //此函数后面会用到
  bindChange(e) {
    this.setData({
      current: e.detail.current
    })
  },

  onLoad: function () {
    console.log('====hxf onLoad')
    var contentH = wx.getSystemInfoSync().windowHeight - 55 / 750 * wx.getSystemInfoSync().windowWidth;
    this.setData({
      contentheight: contentH,
      isLoading: app.globalData.isLoading
    });
  },

  onShow: function () {
    console.log('====hxf onShow')
    var fundCodes = app.globalData.fundCodes;
    var fundShare = app.globalData.fundShare;
    console.log(fundCodes, fundShare)
    if (!fundCodes) {
      console.log('没有自选基金')
      wx.hideLoading();
      return;
    }
    var _this = this;
    getFundInfo(fundCodes, function (data) {
      const fundList = []
      data.forEach(item => {
        const fundItem = {};
        fundItem.id = item.code; // 基金代号
        fundItem.name = item.name; // 基金名字
        fundItem.netWorth = item.netWorth; // 当前净值
        fundItem.netWorthDate = item.netWorthDate; // 当前净值日期
        fundItem.dayGrowth = item.dayGrowth; // 日涨幅
        fundItem.expectGrowth = item.expectGrowth; // 估算涨幅
        fundItem.expectWorth = item.expectWorth; // 估算净值
        fundItem.expectWorthDate = item.expectWorthDate; // 估算净值日期
        if (!!fundShare[item.code]) {
          fundItem.income = (fundShare[item.code] * Number(item.expectGrowth) * Number(item.expectWorth) / (100 + Number(item.expectGrowth))).toFixed(2);
        } else {
          fundItem.income = 0;
        }
        fundList.push(fundItem);
      });
      wx.hideLoading();
      _this.setData({
        fundData: fundList
      })
    }, function (error) {
      console.log(error)
    });
  },

  onReady: function () {
    console.log('====hxf onReady')
  }

})
