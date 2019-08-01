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
    console.log("点击了图片");
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