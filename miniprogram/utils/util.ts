import { Book } from '../data/dataModel'

export function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}

export function isBookInfoAvailable(book: Book): string {
  // 检查书名
  if (!confirmStrLength(book.title)) {
    return getErroMessage(book.title, "书名");
  } else if (!confirmStrLength(book.frontImage)) {
    return getErroMessage("", "书籍图片");
  } else if (!confirmStrLength(book.author)) {
    return getErroMessage(book.author, "书籍作者");
  } else if (book.totalPages <= 0) {
    return getErroMessage("", "书籍总页数");
  } else if (!confirmStrLength(book.readReason)) {
    return getErroMessage(book.readReason, "读书初心");
  }
  return "";
}

const confirmStrLength = (str: string): boolean => {
  if (!str) {
    return false;
  } else {
    let tempStr = str.replace(/\s+/g, "");
    if (tempStr.length === 0) {
      return false;
    }
  }
  return true;
}

const getErroMessage = (str: string, prefix: string): string => {
  if (str) {
    return prefix + "“" + str + "”不符合要求";
  } else {
    return prefix + "不能为空";
  }
}

export function getImageId(imageUrl: string): string {
  let index: number = imageUrl.indexOf("=");
  return imageUrl.substring(index + 1, imageUrl.length);
}

export function getAddUrl(book: Book): string {
  let url = "../add/add?title=" + book.title + "&totalPages=" + book.totalPages + "&author=" + book.author + "&publishHouse=" + book.publishHouse + "&currentPage=" + book.currentPage + "&startPage=" + book.startPage + "&endPage=" + book.endPage + "&lastDate=" + book.lastDate + "&description=" + book.description + "&readReason=" + book.readReason + "&reading=" + book.reading + "&percent=" + book.percent + "&publishDate=" + book.publishDate + "&from=2";
  if (book.frontImage.indexOf("=") !== -1) {
    return url + "&imageId=" + getImageId(book.frontImage);
  } else {
    return url + "&frontImage=" + book.frontImage;
  }
}
