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
    books: [{
      title: "未来简史",
      totalPages: 405,
      readReason: "提高认知",
      reading: true,
      frontImage: "http://isbn.szmesoft.com/ISBN/GetBookPhoto?ID=39E14D7C13A63C7E607F2A6EAC0BB27B",
      currentPage: 25,
      percent: 6,
      author: "[以] 尤瓦尔·赫拉利",
      lastDate: "2019-07-31"
    }]
  }
})