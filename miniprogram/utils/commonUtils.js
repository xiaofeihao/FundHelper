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

function isDealTime() {
  var date = new Date();
  if (date.getDay() > 5 || date.getHours() >= 14 ||
    date.getHours() < 9 || (date.getHours() < 10 && date.getMinutes() < 30)) {
    return false;
  } else {
    return true;
  }
}

module.exports.saveFund = saveFund;
module.exports.isDealTime = isDealTime;