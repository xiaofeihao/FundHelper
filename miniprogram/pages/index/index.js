"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            console.log("扫码");
        }
        else if (clickIndex === 1) {
            wx.navigateTo({
                url: '../add/add'
            });
        }
        this.setData({
            showFloatView: false
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUM7UUFDM0IsYUFBYSxFQUFFLEtBQUs7UUFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSztLQUM1QjtJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07SUFFTixDQUFDO0lBQ0QsUUFBUSxFQUFSO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWEsRUFBRSxDQUFDLElBQUk7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFlBQVksRUFBRSxVQUFTLEtBQVU7UUFDL0IsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUcsVUFBVSxLQUFLLENBQUMsRUFBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO2FBQUssSUFBRyxVQUFVLEtBQUssQ0FBQyxFQUFDO1lBQ3hCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLFlBQVk7YUFDbEIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osYUFBYSxFQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBpbnB1dE1vZGU6IFsn5omr5o+P5p2h5b2i56CBJywn5omL5Yqo6L6T5YWlJ10sXG4gICAgc2hvd0Zsb2F0VmlldzogZmFsc2UsXG4gICAgYm9va3M6IGFwcC5nbG9iYWxEYXRhLmJvb2tzXG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBcbiAgfSxcbiAgY2xpY2tBZGQoKSB7XG4gICAgbGV0IHNob3cgPSB0aGlzLmRhdGEuc2hvd0Zsb2F0VmlldztcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dGbG9hdFZpZXc6ICFzaG93XG4gICAgfSlcbiAgfSxcbiAgY2xpY2tBZGRJdGVtOiBmdW5jdGlvbihldmVudDogYW55KSB7XG4gICAgbGV0IGNsaWNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgaWYoY2xpY2tJbmRleCA9PT0gMCl7XG4gICAgICBjb25zb2xlLmxvZyhcIuaJq+eggVwiKTtcbiAgICB9ZWxzZSBpZihjbGlja0luZGV4ID09PSAxKXtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9hZGQvYWRkJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2hvd0Zsb2F0VmlldzpmYWxzZVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=