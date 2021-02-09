//index.js
const { getFundInfo } = require("../../network/netManager.js");
const app = getApp()

Page({
  data: {
    titles: ['自选', '行情', '推荐'],
    current: 0,
    contentHeight: 0,
    fundData: []
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
      contentheight: contentH
    })
  },

  onShow: function () {
    console.log('====hxf onShow')
    var fundCodes = app.globalData.fundCodes;
    console.log(fundCodes)
    if (!fundCodes) {
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
        fundList.push(fundItem);
      });
      console.log('getFundInfo ===== '+fundList)
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
