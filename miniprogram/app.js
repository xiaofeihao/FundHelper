//app.js
App({
  onLaunch: function () {
    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     // env 参数说明：
    //     //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
    //     //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
    //     //   如不填则使用默认环境（第一个创建的环境）
    //     // env: 'my-env-id',
    //     traceUser: true,
    //   })
    // }
    console.log('APP onLaunch')

    this.globalData = {
      fundCodes: '',
      fundShare: {},
      needAdapt: false
    }

    let _this = this;
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        if(res.safeArea.top > 20){
          console.log('需要适配')
          _this.globalData.needAdapt = true
        }
      }
    })
  },
  onShow: function() {
    wx.showLoading({
      title: '正在加载...',
    });
    var _this = this;
    wx.getStorage({
      key: 'fundCodes',
      success (res) {
        console.log('====res fundcodes = ', res.data)
        if(res.data) {
          _this.globalData.fundCodes = res.data;
        }
      },
      fail (err) {
        console.log('====res err = ', err);
      }
    });
    wx.getStorage({
      key: 'fundShare',
      success (res) {
        console.log('====res fundshare = ', res.data)
        _this.globalData.fundShare = res.data;
      },
      fail(err) {
        console.log('====res err = ', err)
      }
    })
  }
})
