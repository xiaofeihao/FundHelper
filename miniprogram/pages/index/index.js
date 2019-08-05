"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netService_1 = require("../../network/netService");
var util_1 = require("../../utils/util");
var app = getApp();
Page({
    data: {
        inputMode: ['扫描条形码', '手动输入'],
        showFloatView: false,
        books: app.globalData.books,
        isEmpty: true
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        console.log('onLoad..');
    },
    onShow: function () {
        console.log('onShow..');
        var tempBooks = wx.getStorageSync("books");
        this.setData({
            books: tempBooks,
            isEmpty: tempBooks.length === 0
        });
    },
    clickBookItem: function (event) {
        var index = Number(event.currentTarget.id);
        var book = this.data.books[index];
        wx.navigateTo({
            url: util_1.getAddUrl(book)
        });
    },
    clickAdd: function () {
        var show = this.data.showFloatView;
        this.setData({
            showFloatView: !show
        });
    },
    clickAddItem: function (event) {
        var clickIndex = event.currentTarget.dataset.index;
        if (clickIndex === 0) {
            wx.showLoading({
                title: '正在查询...',
                mask: true
            });
            wx.scanCode({
                onlyFromCamera: true,
                success: function (res) {
                    console.log(res.result);
                    wx.hideLoading();
                    netService_1.getBookInfo(res.result, function (data) {
                        wx.navigateTo({
                            url: "../add/add?title=" + data.BookName + "&totalPages=" + data.Pages + "&author=" + data.Author + "&publishHouse=" + data.Publishing + "&imageId=" + data.PhotoUrl + "&from=0"
                        });
                    }, function (err) {
                        wx.hideLoading();
                        if (err.ErrorCode) {
                            wx.navigateTo({
                                url: '../add/add?from=0&errMessage=' + err.ErrorMessage
                            });
                        }
                        else {
                            wx.navigateTo({
                                url: '../add/add?from=0&errMessage=未知错误'
                            });
                        }
                    });
                }
            });
        }
        else if (clickIndex === 1) {
            wx.navigateTo({
                url: '../add/add?from=1'
            });
        }
        this.setData({
            showFloatView: false
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVEQUFzRDtBQUV0RCx5Q0FBNEM7QUFFNUMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUM1QixhQUFhLEVBQUUsS0FBSztRQUNwQixLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQzNCLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLFNBQVMsR0FBZ0IsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLFNBQVM7WUFDaEIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsYUFBYSxFQUFFLFVBQVUsS0FBVTtRQUNqQyxJQUFJLEtBQUssR0FBVyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGdCQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3JCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osYUFBYSxFQUFFLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsWUFBWSxFQUFFLFVBQVUsS0FBVTtRQUNoQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDVixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsT0FBTyxFQUFQLFVBQVEsR0FBRztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNqQix3QkFBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBQyxJQUFTO3dCQUNoQyxFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBRSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUzt5QkFDakwsQ0FBQyxDQUFBO29CQUNKLENBQUMsRUFBRSxVQUFDLEdBQVE7d0JBQ1YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNqQixJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7NEJBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLCtCQUErQixHQUFHLEdBQUcsQ0FBQyxZQUFZOzZCQUN4RCxDQUFDLENBQUM7eUJBQ0o7NkJBQU07NEJBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsbUNBQW1DOzZCQUN6QyxDQUFDLENBQUM7eUJBQ0o7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO2FBQU0sSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG1CQUFtQjthQUN6QixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhLEVBQUUsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7IGdldEJvb2tJbmZvIH0gZnJvbSAnLi4vLi4vbmV0d29yay9uZXRTZXJ2aWNlJ1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJy4uLy4uL2RhdGEvZGF0YU1vZGVsJ1xuaW1wb3J0IHsgZ2V0QWRkVXJsIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCcgXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBpbnB1dE1vZGU6IFsn5omr5o+P5p2h5b2i56CBJywgJ+aJi+WKqOi+k+WFpSddLFxuICAgIHNob3dGbG9hdFZpZXc6IGZhbHNlLFxuICAgIGJvb2tzOiBhcHAuZ2xvYmFsRGF0YS5ib29rcyxcbiAgICBpc0VtcHR5OiB0cnVlXG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnb25Mb2FkLi4nKTtcbiAgfSxcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKCdvblNob3cuLicpO1xuICAgIGxldCB0ZW1wQm9va3M6IEFycmF5PEJvb2s+ID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJib29rc1wiKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGJvb2tzOiB0ZW1wQm9va3MsXG4gICAgICBpc0VtcHR5OiB0ZW1wQm9va3MubGVuZ3RoID09PSAwXG4gICAgfSlcbiAgfSxcbiAgY2xpY2tCb29rSXRlbTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBsZXQgYm9vazogQm9vayA9IHRoaXMuZGF0YS5ib29rc1tpbmRleF07XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGdldEFkZFVybChib29rKVxuICAgIH0pXG4gIH0sXG4gIGNsaWNrQWRkKCkge1xuICAgIGxldCBzaG93ID0gdGhpcy5kYXRhLnNob3dGbG9hdFZpZXc7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzaG93RmxvYXRWaWV3OiAhc2hvd1xuICAgIH0pXG4gIH0sXG4gIGNsaWNrQWRkSXRlbTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgY2xpY2tJbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBpZiAoY2xpY2tJbmRleCA9PT0gMCkge1xuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+ato+WcqOafpeivoi4uLicsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pO1xuICAgICAgd3guc2NhbkNvZGUoe1xuICAgICAgICBvbmx5RnJvbUNhbWVyYTogdHJ1ZSxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMucmVzdWx0KTtcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIGdldEJvb2tJbmZvKHJlcy5yZXN1bHQsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6IFwiLi4vYWRkL2FkZD90aXRsZT1cIiArIGRhdGEuQm9va05hbWUgKyBcIiZ0b3RhbFBhZ2VzPVwiICsgZGF0YS5QYWdlcyArIFwiJmF1dGhvcj1cIiArIGRhdGEuQXV0aG9yICsgXCImcHVibGlzaEhvdXNlPVwiICsgZGF0YS5QdWJsaXNoaW5nICsgXCImaW1hZ2VJZD1cIiArIGRhdGEuUGhvdG9VcmwgKyBcIiZmcm9tPTBcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICBpZiAoZXJyLkVycm9yQ29kZSkge1xuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9hZGQvYWRkP2Zyb209MCZlcnJNZXNzYWdlPScgKyBlcnIuRXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vYWRkL2FkZD9mcm9tPTAmZXJyTWVzc2FnZT3mnKrnn6XplJnor68nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChjbGlja0luZGV4ID09PSAxKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vYWRkL2FkZD9mcm9tPTEnXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzaG93RmxvYXRWaWV3OiBmYWxzZVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=