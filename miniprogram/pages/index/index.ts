//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { getBookInfo } from '../../network/netService'
import { Book } from '../../data/dataModel'
import { getAddUrl } from '../../utils/util' 

const app = getApp<IMyApp>()

Page({
  data: {
    inputMode: ['扫描条形码', '手动输入'],
    showFloatView: false,
    books: app.globalData.books,
    isEmpty: true
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log('onLoad..');
  },
  onShow() {
    console.log('onShow..');
    let tempBooks: Array<Book> = wx.getStorageSync("books");
    this.setData!({
      books: tempBooks,
      isEmpty: tempBooks.length === 0
    })
  },
  clickBookItem: function (event: any) {
    let index: number = Number(event.currentTarget.id);
    let book: Book = this.data.books[index];
    wx.navigateTo({
      url: getAddUrl(book)
    })
  },
  clickAdd() {
    let show = this.data.showFloatView;
    this.setData!({
      showFloatView: !show
    })
  },
  clickAddItem: function (event: any) {
    let clickIndex = event.currentTarget.dataset.index;
    if (clickIndex === 0) {
      wx.showLoading({
        title: '正在查询...',
        mask: true
      });
      wx.scanCode({
        onlyFromCamera: true,
        success(res) {
          console.log(res.result);
          wx.hideLoading();
          getBookInfo(res.result, (data: any) => {
            wx.navigateTo({
              url: "../add/add?title=" + data.BookName + "&totalPages=" + data.Pages + "&author=" + data.Author + "&publishHouse=" + data.Publishing + "&imageId=" + data.PhotoUrl + "&from=0"
            })
          }, (err: any) => {
            wx.hideLoading();
            if (err.ErrorCode) {
              wx.navigateTo({
                url: '../add/add?from=0&errMessage=' + err.ErrorMessage
              });
            } else {
              wx.navigateTo({
                url: '../add/add?from=0&errMessage=未知错误'
              });
            }
          })
        }
      })
    } else if (clickIndex === 1) {
      wx.navigateTo({
        url: '../add/add?from=1'
      });
    }
    this.setData!({
      showFloatView: false
    })
  }
})
