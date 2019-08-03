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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVEQUFzRDtBQUV0RCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDO1FBQzNCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUs7S0FDNUI7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO0lBRU4sQ0FBQztJQUNELFFBQVEsRUFBUjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhLEVBQUUsQ0FBQyxJQUFJO1NBQ3JCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxZQUFZLEVBQUUsVUFBUyxLQUFVO1FBQy9CLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFHLFVBQVUsS0FBSyxDQUFDLEVBQUM7WUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNWLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixPQUFPLEVBQVAsVUFBUSxHQUFHO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ2pCLHdCQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFDLElBQVM7d0JBQ2hDLEVBQUUsQ0FBQyxVQUFVLENBQUM7NEJBQ1osR0FBRyxFQUFFLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTO3lCQUNqTCxDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFFLFVBQUMsR0FBUTt3QkFDVixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ2pCLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTs0QkFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsK0JBQStCLEdBQUcsR0FBRyxDQUFDLFlBQVk7NkJBQ3hELENBQUMsQ0FBQzt5QkFDSjs2QkFBSTs0QkFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO2dDQUNaLEdBQUcsRUFBRSxtQ0FBbUM7NkJBQ3pDLENBQUMsQ0FBQzt5QkFDSjtvQkFDSCxDQUFDLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7YUFBSyxJQUFHLFVBQVUsS0FBSyxDQUFDLEVBQUM7WUFDeEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsbUJBQW1CO2FBQ3pCLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWEsRUFBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuaW1wb3J0IHsgZ2V0Qm9va0luZm8gfSBmcm9tICcuLi8uLi9uZXR3b3JrL25ldFNlcnZpY2UnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBpbnB1dE1vZGU6IFsn5omr5o+P5p2h5b2i56CBJywn5omL5Yqo6L6T5YWlJ10sXG4gICAgc2hvd0Zsb2F0VmlldzogZmFsc2UsXG4gICAgYm9va3M6IGFwcC5nbG9iYWxEYXRhLmJvb2tzXG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBcbiAgfSxcbiAgY2xpY2tBZGQoKSB7XG4gICAgbGV0IHNob3cgPSB0aGlzLmRhdGEuc2hvd0Zsb2F0VmlldztcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dGbG9hdFZpZXc6ICFzaG93XG4gICAgfSlcbiAgfSxcbiAgY2xpY2tBZGRJdGVtOiBmdW5jdGlvbihldmVudDogYW55KSB7XG4gICAgbGV0IGNsaWNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgaWYoY2xpY2tJbmRleCA9PT0gMCl7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5q2j5Zyo5p+l6K+iLi4uJyxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB3eC5zY2FuQ29kZSh7XG4gICAgICAgIG9ubHlGcm9tQ2FtZXJhOiB0cnVlLFxuICAgICAgICBzdWNjZXNzKHJlcyl7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBnZXRCb29rSW5mbyhyZXMucmVzdWx0LCAoZGF0YTogYW55KT0+e1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgIHVybDogXCIuLi9hZGQvYWRkP3RpdGxlPVwiICsgZGF0YS5Cb29rTmFtZSArIFwiJnRvdGFsUGFnZXM9XCIgKyBkYXRhLlBhZ2VzICsgXCImYXV0aG9yPVwiICsgZGF0YS5BdXRob3IgKyBcIiZwdWJsaXNoSG91c2U9XCIgKyBkYXRhLlB1Ymxpc2hpbmcgKyBcIiZpbWFnZUlkPVwiICsgZGF0YS5QaG90b1VybCArIFwiJmZyb209MFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIGlmIChlcnIuRXJyb3JDb2RlKSB7XG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJy4uL2FkZC9hZGQ/ZnJvbT0wJmVyck1lc3NhZ2U9JyArIGVyci5FcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vYWRkL2FkZD9mcm9tPTAmZXJyTWVzc2FnZT3mnKrnn6XplJnor68nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfWVsc2UgaWYoY2xpY2tJbmRleCA9PT0gMSl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vYWRkL2FkZD9mcm9tPTEnXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzaG93RmxvYXRWaWV3OmZhbHNlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==