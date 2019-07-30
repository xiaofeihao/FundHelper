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
                message: 'message'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSxLQUFLO2FBQ2YsRUFBRTtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNiLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLFNBQVM7YUFDbkIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNmLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7YUFDZixFQUFFO2dCQUNELE9BQU8sRUFBRSxLQUFLO2FBQ2YsRUFBRTtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNmLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7YUFDZixFQUFFO2dCQUNELE9BQU8sRUFBRSxLQUFLO2FBQ2YsQ0FBQztLQUNMO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBhcnJheTogW3tcbiAgICAgIG1lc3NhZ2U6ICdmb28nLFxuICAgIH0sIHtcbiAgICAgIG1lc3NhZ2U6ICdiYXInXG4gICAgICB9LCB7XG4gICAgICAgIG1lc3NhZ2U6ICdtZXNzYWdlJ1xuICAgICAgfSwge1xuICAgICAgICBtZXNzYWdlOiAnYmFyJ1xuICAgICAgfSwge1xuICAgICAgICBtZXNzYWdlOiAnYmFyJ1xuICAgICAgfSwge1xuICAgICAgICBtZXNzYWdlOiAnYmFyJ1xuICAgICAgfSwge1xuICAgICAgICBtZXNzYWdlOiAnYmFyJ1xuICAgICAgfSwge1xuICAgICAgICBtZXNzYWdlOiAnYmFyJ1xuICAgICAgfSwge1xuICAgICAgICBtZXNzYWdlOiAnYmFyJ1xuICAgICAgfV1cbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKGFwcC5nbG9iYWxEYXRhLmNvdW50KTtcbiAgfSxcbiAgY2xpY2tBZGQoKSB7XG4gICAgY29uc29sZS5sb2coXCLngrnlh7vkuoblop7liqDmjInpkq5cIik7XG4gIH1cbn0pXG4iXX0=