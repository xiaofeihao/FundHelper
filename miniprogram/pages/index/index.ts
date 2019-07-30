//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
      }, {
        message: 'bar'
      }, {
        message: 'bar'
      }, {
        message: 'bar'
      }, {
        message: 'bar'
      }, {
        message: 'bar'
      }, {
        message: 'bar'
      }, {
        message: 'bar'
      }]
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log(app.globalData.count);
  },
  clickAdd() {
    console.log("点击了增加按钮");
  }
})
