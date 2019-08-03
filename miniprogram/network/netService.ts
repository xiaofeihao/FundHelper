const bookInfoUrl = "https://isbn.szmesoft.com/isbn/query";
const bookImagePrefix = "https://isbn.szmesoft.com/ISBN/GetBookPhoto\?ID=";

export function getBookInfo(isbnCode: string, success: (res:any)=>void, fail: (res: any)=>void) {
  wx.request({
    url: bookInfoUrl,
    data: {
      isbn: isbnCode
    },
    success (res:any) {
      if(res.statusCode === 200){
        if(res.data.ErrorCode){
          fail(res.data)
        }else{
          success(res.data)
        }
      }
    },
    fail (err) {
      fail(err)
    }
  })
}

export function getBookImage(imageId: string): string{
  return bookImagePrefix + imageId;
}