var DOMAIN = 'https://api.doctorxiong.club';
var FUND_INFO = '/v1/fund';
var TOKEN = 'CpBTaOcve5';

function request(config, s, f) {
  wx.request({
    url: config.url,
    data: config.data,
    header: {
      token: TOKEN
    },
    success: function (res) {
      if (res && res.data && res.data.data) {
        s(res.data.data)
      } else {
        f(res)
      }
    },
    fail: function (error) {
      f(error)
    }
  })
}

export function getFundInfo(code, success, fail) {
  request({
    url: DOMAIN + FUND_INFO,
    data: {
      code
    }
  }, success, fail)
}