import { getBookImage } from '../../network/netService'

Page({
  data: {
    title: "", // 书名
    frontImage: "", // 图片
    totalPages: 0, // 总页数
    currentPage: 0, // 当前阅读的页数
    lastDate: "", // 最新更新时间 年-月-日
    author: "", // 作者
    description: "", // 简介
    readReason: "", // 初心，阅读理由
    thoughts: null, // 感想
    reading: true, // 是否在读
    percent: 0, // 当前进度
    startPage: 0,
    endPage: 0,
    publishHouse: "",
    publishDate: "",
    openThoughtButton: false
  },
  onLoad(option:any) {
    console.log(option);
    if(Number(option.from)===0){
      // 扫码过来的
      if(option.errMessage){
        // 说明有错误
        wx.showToast({
          title: option.errMessage,
          icon: 'none',
          duration: 2000
        })
      }else{
        let pages: string = option.totalPages ? option.totalPages : '0';
        let length: number = pages.length;
        if(pages.lastIndexOf('页') !== -1){
          pages = pages.substring(0, length-1);
        }
        this.setData!({
          title: option.title ? option.title : "",
          author: option.author ? option.author : "",
          frontImage: option.imageId ? getBookImage(option.imageId) : "",
          publishHouse: option.publishHouse ? option.publishHouse : "",
          totalPages: Number(pages)
        })
      }
    } else if (Number(option.from) === 1){
      console.log("点击手动添加进来的")
    }
    
  },
  clickImage() {
    const pageThis = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        pageThis.setData!({
          frontImage: res.tempFilePaths[0]
        });
      }
    });
  },
  bookNameInput: function (e: any) {
    this.setData!({
      title: e.detail.value
    })
  },
  bookAuthorInput: function (e: any) {
    this.setData!({
      author: e.detail.value
    })
  },
  bookTotalPageInput: function (e: any) {
    this.setData!({
      totalPages: Number(e.detail.value)
    })
  },
  readingStatusChange: function (e: any) {
    this.setData!({
      reading: e.detail.value
    })
  },
  bookReasonInput: function(e: any) {
    this.setData!({
      readReason: e.detail.value
    })
  },
  bookPublishHouseInput: function(e: any) {
    this.setData!({
      publishHouse: e.detail.value
    })
  },
  bookPublishDateInput: function (e: any) {
    this.setData!({
      publishDate: e.detail.value
    })
  },
  bookDescriptionInput: function (e: any) {
    this.setData!({
      description: e.detail.value
    })
  }
})