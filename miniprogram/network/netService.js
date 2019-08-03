"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookInfoUrl = "https://isbn.szmesoft.com/isbn/query";
var bookImagePrefix = "https://isbn.szmesoft.com/ISBN/GetBookPhoto\?ID=";
function getBookInfo(isbnCode, success, fail) {
    wx.request({
        url: bookInfoUrl,
        data: {
            isbn: isbnCode
        },
        success: function (res) {
            if (res.statusCode === 200) {
                if (res.data.ErrorCode) {
                    fail(res.data);
                }
                else {
                    success(res.data);
                }
            }
        },
        fail: function (err) {
            fail(err);
        }
    });
}
exports.getBookInfo = getBookInfo;
function getBookImage(imageId) {
    return bookImagePrefix + imageId;
}
exports.getBookImage = getBookImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFdBQVcsR0FBRyxzQ0FBc0MsQ0FBQztBQUMzRCxJQUFNLGVBQWUsR0FBRyxrREFBa0QsQ0FBQztBQUUzRSxTQUFnQixXQUFXLENBQUMsUUFBZ0IsRUFBRSxPQUF3QixFQUFFLElBQXNCO0lBQzVGLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDVCxHQUFHLEVBQUUsV0FBVztRQUNoQixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsT0FBTyxFQUFQLFVBQVMsR0FBTztZQUNkLElBQUcsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUM7Z0JBQ3hCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7b0JBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ2Y7cUJBQUk7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDbEI7YUFDRjtRQUNILENBQUM7UUFDRCxJQUFJLFlBQUUsR0FBRztZQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBbkJELGtDQW1CQztBQUVELFNBQWdCLFlBQVksQ0FBQyxPQUFlO0lBQzFDLE9BQU8sZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUNuQyxDQUFDO0FBRkQsb0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib29rSW5mb1VybCA9IFwiaHR0cHM6Ly9pc2JuLnN6bWVzb2Z0LmNvbS9pc2JuL3F1ZXJ5XCI7XG5jb25zdCBib29rSW1hZ2VQcmVmaXggPSBcImh0dHBzOi8vaXNibi5zem1lc29mdC5jb20vSVNCTi9HZXRCb29rUGhvdG9cXD9JRD1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvb2tJbmZvKGlzYm5Db2RlOiBzdHJpbmcsIHN1Y2Nlc3M6IChyZXM6YW55KT0+dm9pZCwgZmFpbDogKHJlczogYW55KT0+dm9pZCkge1xuICB3eC5yZXF1ZXN0KHtcbiAgICB1cmw6IGJvb2tJbmZvVXJsLFxuICAgIGRhdGE6IHtcbiAgICAgIGlzYm46IGlzYm5Db2RlXG4gICAgfSxcbiAgICBzdWNjZXNzIChyZXM6YW55KSB7XG4gICAgICBpZihyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKXtcbiAgICAgICAgaWYocmVzLmRhdGEuRXJyb3JDb2RlKXtcbiAgICAgICAgICBmYWlsKHJlcy5kYXRhKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdWNjZXNzKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWlsIChlcnIpIHtcbiAgICAgIGZhaWwoZXJyKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvb2tJbWFnZShpbWFnZUlkOiBzdHJpbmcpOiBzdHJpbmd7XG4gIHJldHVybiBib29rSW1hZ2VQcmVmaXggKyBpbWFnZUlkO1xufSJdfQ==