// components/table/table.js
var appInstance = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fundList: { // 父组件传入的表格数据
      type: Array,
      value: []
    },
    columns: { // 父组件传入的表头标题
      type: Array,
      value: []
    },
    setting: { // 父组件传入的表格自定义样式
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fundCodes: appInstance.globalData.fundCodes,
    headWidth: null, // 设置表格的整体宽度，用于水平滚动
    column: [], // 表头标题
    config: { // 表格自定义样式设置
      tableOutBorder: '', // 表格的表框
      tableInBorder: '', // 表格的表框
      tableInBorderLevel: false, // 表格内只显示水平边框
      tableRadius: '', // 表格圆角
      theadHeight: '', // 表头的高度
      theadAlign: '', // 表头的字体对齐
      theadColor: '', // 表头的字体颜色
      theadBgColor: '', // 表头的背景色
      theadFontSize: '', // 表头的字体大小
      theadFontWeight: '', // 表头的字体粗细
      tbodyHeight: '', // 表格 tbody 的高度, 用于垂直滚动
      tbodyAlign: '', // 表格行的字体对齐方式
      tbodyColor: '', // 表格行的字体颜色
      tbodyBgColor: '', // 表格行的背景色
      tbodyFontSize: '', // 表格行的字体大小
      tbodyFontWeight: '', // 表格行的字体粗细
      trHeight: '', // 表格行 tr 的高度
      stripe: '' // 表格的斑马纹背景色
    }
  },

  observers: {
    'columns': function(params) {
      if (params.length !== 0) {
        let width = 0;
        let num = 0;
        params.forEach(item => {
          // 判断是否设置了列宽，没有的话默认赋值186，单位rpx
          if (!!item.width) {
            width = item.width / 1;
          } else {
            item.width = 186;
            width = width + 186;
          }
          // 如果给多列添加了点击事件，则第一个绑定了点击事件的列生效
          if (!!item.onclick && (item.onclick == true || item.onclick == 'true')) {
            num++
            if (num > 1) {
              item.onclick = false
            }
          }
        });
        // 判断table的宽度是否超出屏幕的宽度，超出则赋值固定的宽度，否则赋值百分比
        if (width < 750) {
          width = '100%'
        } else {
          width = width + 'rpx'
        }
        this.setData({
          column: params,
          headWidth: width
        })
      }
    },
    'setting': function(val) {
      // 判断传入的表格设置项是否为空
      if (Object.keys(val).length !== 0) {
        for (let key in val) {
          let str = null
          if(key == 'tableInBorderLevel' && (val[key] == true || val[key] == 'true')) {
            str = true
          } else if(key == 'tableInBorderLevel') {
            str = false
          } else {
            str = String(val[key]).replace(/(^\s*)|(\s*$)/g, '')
          }
          if(str != '' && str != null && str != 'null' && str != undefined && str != 'undefined') {
            this.data.config[key] = str
          }
        }
        this.setData({
          config: this.data.config
        })
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 表格某行的点击事件
    btnAction: function (e) {
      let value = e.currentTarget.dataset.value // value：一个包含点击行所有数据的对象
      this.triggerEvent("getCurrentValue", value)
    },
    itemAction: function(e) {
      var editFund = e.currentTarget.dataset.value;
      this.triggerEvent("clickFundItem", editFund)
    }
  }
})
