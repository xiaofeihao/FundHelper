function saveFund() {
  var app = getApp();
  wx.setStorage({
    data: app.globalData.fundCodes,
    key: 'fundCodes',
  });
  wx.setStorage({
    data: app.globalData.fundShare,
    key: 'fundShare',
  });
}

module.exports.saveFund = saveFund;