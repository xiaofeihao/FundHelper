// components/quotation/index.js
const { getBoardInfo, getRankInfo } = require("../../network/netManager.js");
const { isDealTime } = require("../../utils/commonUtils.js");
Component({
  lifetimes: {
    created: function () {
      console.log('life 行情 created')
    },
    ready: function () {
      console.log('life 行情 ready')
    },
    attached: function () {
      console.log('life 行情 attacthed')
    },
    detached: function () {
      console.log('life 行情 detached')
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    current: Number,
    contentWidth: Number,
    contentHeight: Number,
    boardData: Array,
    rankData: Array,
    needAdapt: Boolean
  },

  observers: {
    'current': function (index) {
      if (index === 1) {
        this.repeatRefresh();
      } else {
        this.stopRepeat();
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    boardData: [],
    rankData: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    refresh(next) {
      console.log('正在刷新大盘...');
      var _this = this;
      getBoardInfo(function (params) {
        _this.setData({
          boardData: params
        });
        getRankInfo(function (params) {
          _this.setData({
            rankData: params
          });
          if (!!next) {
            next();
          }
        }, function (error) {
          if (!!next) {
            next();
          }
        })
      }, function (error) {
        console.log('error: ', error);
      });
    },
    repeatRefresh() {
      if(!isDealTime()){
        console.log('非交易时间');
        return;
      }
      var _this = this;
      var timeoutNumber = setTimeout(function () {
        _this.refresh(function () {
          _this.repeatRefresh();
        });
      }, 2000);
      this.setData({
        timeoutNumber
      });
    },
    stopRepeat() {
      if(this.data.timeoutNumber){
        clearTimeout(this.data.timeoutNumber);
      }
    }
  }
})
