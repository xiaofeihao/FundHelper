"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var netService_1 = require("../../network/netService");
var app = getApp();
Page({
    data: {
        inputMode: ['扫描条形码', '手动输入'],
        showFloatView: false,
        books: app.globalData.books
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
        this.setData({
            books: wx.getStorageSync("books")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVEQUFzRDtBQUV0RCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDO1FBQzNCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUs7S0FDNUI7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1NBQ2xDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osYUFBYSxFQUFFLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsWUFBWSxFQUFFLFVBQVMsS0FBVTtRQUMvQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBRyxVQUFVLEtBQUssQ0FBQyxFQUFDO1lBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDVixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsT0FBTyxFQUFQLFVBQVEsR0FBRztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNqQix3QkFBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBQyxJQUFTO3dCQUNoQyxFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBRSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUzt5QkFDakwsQ0FBQyxDQUFBO29CQUNKLENBQUMsRUFBRSxVQUFDLEdBQVE7d0JBQ1YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNqQixJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7NEJBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLCtCQUErQixHQUFHLEdBQUcsQ0FBQyxZQUFZOzZCQUN4RCxDQUFDLENBQUM7eUJBQ0o7NkJBQUk7NEJBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsbUNBQW1DOzZCQUN6QyxDQUFDLENBQUM7eUJBQ0o7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO2FBQUssSUFBRyxVQUFVLEtBQUssQ0FBQyxFQUFDO1lBQ3hCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG1CQUFtQjthQUN6QixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhLEVBQUMsS0FBSztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7IGdldEJvb2tJbmZvIH0gZnJvbSAnLi4vLi4vbmV0d29yay9uZXRTZXJ2aWNlJ1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaW5wdXRNb2RlOiBbJ+aJq+aPj+adoeW9oueggScsJ+aJi+WKqOi+k+WFpSddLFxuICAgIHNob3dGbG9hdFZpZXc6IGZhbHNlLFxuICAgIGJvb2tzOiBhcHAuZ2xvYmFsRGF0YS5ib29rc1xuICB9LFxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncydcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ29uTG9hZC4uJyk7XG4gIH0sXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygnb25TaG93Li4nKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGJvb2tzOiB3eC5nZXRTdG9yYWdlU3luYyhcImJvb2tzXCIpXG4gICAgfSlcbiAgfSxcbiAgY2xpY2tBZGQoKSB7XG4gICAgbGV0IHNob3cgPSB0aGlzLmRhdGEuc2hvd0Zsb2F0VmlldztcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dGbG9hdFZpZXc6ICFzaG93XG4gICAgfSlcbiAgfSxcbiAgY2xpY2tBZGRJdGVtOiBmdW5jdGlvbihldmVudDogYW55KSB7XG4gICAgbGV0IGNsaWNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgaWYoY2xpY2tJbmRleCA9PT0gMCl7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5q2j5Zyo5p+l6K+iLi4uJyxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB3eC5zY2FuQ29kZSh7XG4gICAgICAgIG9ubHlGcm9tQ2FtZXJhOiB0cnVlLFxuICAgICAgICBzdWNjZXNzKHJlcyl7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBnZXRCb29rSW5mbyhyZXMucmVzdWx0LCAoZGF0YTogYW55KT0+e1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgIHVybDogXCIuLi9hZGQvYWRkP3RpdGxlPVwiICsgZGF0YS5Cb29rTmFtZSArIFwiJnRvdGFsUGFnZXM9XCIgKyBkYXRhLlBhZ2VzICsgXCImYXV0aG9yPVwiICsgZGF0YS5BdXRob3IgKyBcIiZwdWJsaXNoSG91c2U9XCIgKyBkYXRhLlB1Ymxpc2hpbmcgKyBcIiZpbWFnZUlkPVwiICsgZGF0YS5QaG90b1VybCArIFwiJmZyb209MFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIGlmIChlcnIuRXJyb3JDb2RlKSB7XG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJy4uL2FkZC9hZGQ/ZnJvbT0wJmVyck1lc3NhZ2U9JyArIGVyci5FcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vYWRkL2FkZD9mcm9tPTAmZXJyTWVzc2FnZT3mnKrnn6XplJnor68nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfWVsc2UgaWYoY2xpY2tJbmRleCA9PT0gMSl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vYWRkL2FkZD9mcm9tPTEnXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzaG93RmxvYXRWaWV3OmZhbHNlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==