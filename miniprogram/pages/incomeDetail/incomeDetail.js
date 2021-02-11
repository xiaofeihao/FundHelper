const { getHuShen } = require("../../network/netManager");

// miniprogram/pages/incomeDetail/incomeDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalIncome: 0,
    totalPrice: 0,
    isPositive: true,
    totalRate: 0,
    hushen: 0,
    tips: '以上总收益、总收益率、总持仓均为今日估算值，最终以实际估值为准。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    console.log(query)
    var totalIncome = Number(query['totalIncome']).toFixed(2);
    var totalPrice = Number(query['totalPrice']).toFixed(2);
    var totalRate = (totalIncome * 100 / (totalPrice - totalIncome)).toFixed(2);
    var theBestRate = query['theBestRate'];
    var theBestFund = query['theBestFund'];
    this.setData({
      totalIncome,
      totalPrice,
      isPositive: totalIncome > 0,
      totalRate,
      theBestFund,
      theBestRate
    });
    var _this = this;
    getHuShen(function (data) {
      if (data) {
        var date =  (data['date'].split(' ')[0]).slice(5)
        _this.setData({
          hushen: Number(data['changePercent']),
          date
        });
      }
    }, function(error) {

    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})