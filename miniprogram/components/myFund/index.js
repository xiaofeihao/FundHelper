// import netUtil from '../../network/netManager.js';
var appInstance = getApp();
// components/myFund/index.js
Component({
  /**
   * 生命周期
   */
  lifetimes: {
    created: function () {
      console.log('自选 created')
    },
    ready: function() {
      console.log('自选 ready')
    },
    attached: function () {
      console.log('自选 attacthed')
    },
    detached: function () {
      console.log('自选 detached')
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    contentHeight: Number,
    fundList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fundCodes: '1234',
    // 表格数据
    fundList: [],
    // 表格标题列
    columns: [
      { label: '基金名称', width: 220, prop: 'name', subProp: 'id'},
      { label: '实时估值', width: 100, prop: 'expectGrowth', type: 'percent', subProp: 'expectWorth', date: 'expectWorthDate'},
      { label: '最新净值', width: 100, prop: 'dayGrowth', type: 'percent', subProp: 'netWorth', date: 'netWorthDate'},
      { label: '估算收益', width: 150, prop: 'income'}
    ],
    setting: {
      tableRadius: 0, // 表格圆角
      tableOutBorder: '', // 表格外边框
      tableInBorder: '', // 表格内边框
      tableInBorderLevel: 'true', // 表格内只显示水平边框
      theadHeight: 70, // 表头的高度
      theadAlign: '', // 表头的字体对齐方式
      theadColor: '', // 表头的字体颜色
      theadBgColor: '', // 表头的背景色
      theadFontSize: '', // 表头的字体大小
      theadFontWeight: '', // 表头的字体粗细
      tbodyHeight: '0',  // 表格 tbody 的高度, 用于垂直滚动
      tbodyAlign: '', // 表格行的的字体对齐方式
      tbodyColor: '', // 表格行的字体颜色
      tbodyBgColor: '', // 表格行的背景色
      tbodyFontSize: '', // 表格行的字体大小
      tbodyFontWeight: '', // 表格行的字体粗细
      trHeight: 70, // 表格行 tr 的高度
      stripe: '#fdf5e6' // #fafafa #f5f5f5 #fdf5e6 #fff8dc #f0f9eb
    }
  },

  observers: {
    'contentHeight': function(height) {
      this.setData({
        setting: {...this.data.setting, tbodyHeight: height-100}
      })
    },
    'fundList': function(list) {
      console.log('=====hxf list = '+list)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addFund: function() {
      console.log('addddddd')
      wx.navigateTo({
        url: '/pages/addFunction/addFunction',
      })
    }
  }
})
