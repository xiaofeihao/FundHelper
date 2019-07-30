"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        array: [{
                message: 'foo',
            }, {
                message: 'bar'
            }, {
                message: 'bar'
            }, {
                message: 'bar'
            }, {
                message: 'bar'
            }, {
                message: 'bar'
            }, {
                message: 'bar'
            }, {
                message: 'bar'
            }, {
                message: 'bar'
            }]
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        console.log(app.globalData.count);
    },
    clickAdd: function () {
        console.log("点击了增加按钮");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSxLQUFLO2FBQ2YsRUFBRTtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNiLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7YUFDZixFQUFFO2dCQUNELE9BQU8sRUFBRSxLQUFLO2FBQ2YsRUFBRTtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNmLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7YUFDZixFQUFFO2dCQUNELE9BQU8sRUFBRSxLQUFLO2FBQ2YsRUFBRTtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNmLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO0tBQ0w7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGFycmF5OiBbe1xuICAgICAgbWVzc2FnZTogJ2ZvbycsXG4gICAgfSwge1xuICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH0sIHtcbiAgICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH0sIHtcbiAgICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH0sIHtcbiAgICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH0sIHtcbiAgICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH0sIHtcbiAgICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH0sIHtcbiAgICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH0sIHtcbiAgICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICAgIH1dXG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhhcHAuZ2xvYmFsRGF0YS5jb3VudCk7XG4gIH0sXG4gIGNsaWNrQWRkKCkge1xuICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqG5aKe5Yqg5oyJ6ZKuXCIpO1xuICB9XG59KVxuIl19