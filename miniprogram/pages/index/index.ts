//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    inputMode: ['扫描条形码','手动输入'],
    showFloatView: false,
    books: app.globalData.books
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    
  },
  clickAdd() {
    let show = this.data.showFloatView;
    this.setData!({
      showFloatView: !show
    })
  },
  clickAddItem: function(event: any) {
    let clickIndex = event.currentTarget.dataset.index;
    if(clickIndex === 0){
      console.log("扫码");
    }else if(clickIndex === 1){
      wx.navigateTo({
        url: '../add/add'
      });
    }
    this.setData!({
      showFloatView:false
    })
  }
})
