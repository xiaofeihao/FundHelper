import { Book } from "../../data/dataModel";

let currentBook: Book = {
  title: "",
  totalPages: 0,
  readReason: "",
  reading: true,
  frontImage: "",
  currentPage: 0,
  percent: 0,
  author: "",
  lastDate: ""
};

Page({
  data: {
    book: {}
  },
  onLoad() {
    
  },
  clickImage() {
    const pageThis = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        currentBook.frontImage = res.tempFilePaths[0];
        pageThis.setData!({
          book: currentBook
        });
      }
    });
  },
  bookNameInput: function (e: any) {
    currentBook.title = e.detail.value;
    this.setData!({
      book: currentBook
    })
    console.log(this.data.book);
  },
  bookAuthorInput: function (e: any) {
    currentBook.author = e.detail.value;
    this.setData!({
      book: currentBook
    })
    console.log(this.data.book);
  },
  bookTotalPageInput: function (e: any) {
    currentBook.totalPages = Number(e.detail.value);
    this.setData!({
      book: currentBook
    })
    console.log(this.data.book);
  },
})