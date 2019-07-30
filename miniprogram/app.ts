//app.ts
export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  globalData: {
    count?: number
  }
}

App<IMyApp>({
  onLaunch() {
    // 小程序初始化完成时触发，全局只触发一次。
    console.log(wx.getLaunchOptionsSync());
    console.log("小程序初始化",this.globalData.count);
  },
  globalData: {
    count: 2
  }
})