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

function getJumpUrl(url, params) {
  if (!url) {
    console.log('无效URL')
    return '';
  }
  if (!Boolean(params)) {
    return url;
  }
  var jumpUrl = url;
  Object.keys(params).forEach((key, index) => {
    if (index === 0) {
      jumpUrl = jumpUrl + '?' + key + '=' + params[key];
    } else {
      jumpUrl = jumpUrl + '&' + key + '=' + params[key];
    }
  });
  return jumpUrl;
}

module.exports.saveFund = saveFund;
module.exports.isDealTime = isDealTime;
module.exports.getJumpUrl = getJumpUrl;