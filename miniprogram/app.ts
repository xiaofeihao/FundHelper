//app.ts
import { Book } from './data/dataModel'

export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  globalData: {
    books: Array<Book>
  }
}

App<IMyApp>({
  onLaunch() {
    // 小程序初始化完成时触发，全局只触发一次。
    // console.log("小程序初始化",this.globalData.books[0].title);
  },
  globalData: {
    books: wx.getStorageSync("books")
  }
})