//index.js
const { getFundInfo } = require("../../network/netManager.js");
const { saveFund } = require("../../utils/commonUtils.js");
const app = getApp()

Page({
  data: {
    titles: ['自选', '行情', '推荐'],
    current: 0,
    contentHeight: 0,
    fundData: [],
    needAdapt: false
  },

  taptab(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      current: index
    })
  },
  //此函数后面会用到
  bindChange(e) {
    this.setData({
      current: e.detail.current
    })
  },

  onLoad: function () {
    console.log('====hxf onLoad')
    var contentH = wx.getSystemInfoSync().windowHeight - 55 / 750 * wx.getSystemInfoSync().windowWidth;
    this.setData({
      contentheight: contentH,
      needAdapt: app.globalData.needAdapt
    });
  },

  onShow: function () {
    console.log('====hxf onShow')
    var fundCodes = app.globalData.fundCodes;
    var fundShare = app.globalData.fundShare;
    console.log(fundCodes, fundShare)
    if (!fundCodes) {
      console.log('没有自选基金')
      wx.hideLoading();
      return;
    }
    var _this = this;
    getFundInfo(fundCodes, function (data) {
      const fundList = []
      data.forEach(item => {
        const fundItem = {};
        fundItem.id = item.code; // 基金代号
        fundItem.name = item.name; // 基金名字
        fundItem.netWorth = item.netWorth; // 当前净值
        fundItem.netWorthDate = item.netWorthDate; // 当前净值日期
        fundItem.dayGrowth = item.dayGrowth; // 日涨幅
        fundItem.expectGrowth = item.expectGrowth; // 估算涨幅
        fundItem.expectWorth = item.expectWorth; // 估算净值
        fundItem.expectWorthDate = item.expectWorthDate; // 估算净值日期
        if (!!fundShare[item.code]) {
          fundItem.income = (fundShare[item.code] * Number(item.expectGrowth) * Number(item.expectWorth) / (100 + Number(item.expectGrowth))).toFixed(2);
        } else {
          fundItem.income = 0;
        }
        fundList.push(fundItem);
      });
      wx.hideLoading();
      var totalIncome = 0;
      fundList.forEach(item => {
        totalIncome += Number(item.income);
      })
      _this.setData({
        fundData: fundList,
        totalIncome: totalIncome.toFixed(2)
      })
    }, function (error) {
      console.log(error)
    });
  },

  onReady: function () {
    console.log('====hxf onReady')
  },

  fundEditAction: function (value) {
    console.log('页面回调 ', value);
    var editFund = value.detail;
    var _this = this;
    wx.showActionSheet({
      itemList: ['查看详情', '修改持仓', '删除'],
      success(res) {
        if (res.tapIndex === 0) {
          // 查看详情
        } else if (res.tapIndex === 1) {
          // 修改持仓
          _this.changeFund(editFund);
        } else if (res.tapIndex === 2) {
          // 删除
          _this.deleteFund(editFund);
        }
      }
    })
  },

  /**
   * 刷新页面
   * @param {*} newData 全新的自选基金数据
   */
  refreshData: function (newData) {
    var totalIncome = 0;
    newData.forEach(item => {
      totalIncome += Number(item.income);
    })
    this.setData({
      fundData: newData,
      totalIncome: totalIncome.toFixed(2)
    });
  },

  /**
   * 删除自选
   * @param {*} editFund 待删除基金
   */
  deleteFund: function (editFund) {
    var code = editFund.id;
    var fundCodes = app.globalData.fundCodes;
    var _this = this;
    wx.showModal({
      title: '删除自选',
      content: '是否要删除：' + editFund.name,
      cancelText: '确定',
      cancelColor: 'red',
      confirmText: '取消',
      confirmColor: '#000000',
      success(res) {
        if (res.cancel) {
          // 因为弹框不支持按钮顺序，所以这里用原生的cancel代表确定删除
          console.log('删除成功')
          if (fundCodes) {
            var fundArray = fundCodes.split(',');
            fundArray.splice(fundArray.indexOf(code), 1);
            app.globalData.fundCodes = fundArray.join(',');
            delete app.globalData.fundShare[code];
            var lastFundData = _this.data.fundData;
            var newFundData = lastFundData.filter(value => value.id !== code);
            _this.refreshData(newFundData);
            saveFund();
          }
        } else if (res.confirm) {
          console.log('取消删除')
        }
      }
    })
    
    
  },

  /**
   * 修改基金持仓
   * @param {*} editFund 待修改基金
   */
  changeFund: function (editFund) {
    var code = editFund.id;
    var name = editFund.name;
    var fundShare = app.globalData.fundShare;
    var _this = this;
    wx.showModal({
      title: `修改${name}持仓`,
      placeholderText: `${fundShare[code]}`,
      editable: true,
      success(res) {
        if (res.confirm) {
          console.log('修改成功：' + res.content);
          var newShare = Number(res.content);
          console.log(newShare)
          if(isNaN(newShare) || newShare < 0){
            wx.showToast({
              title: '输入不合法',
              icon: 'error'
            });
            _this.changeFund(editFund);
            return;
          }
          fundShare[code] = newShare;
          var fundData = _this.data.fundData;
          fundData.forEach(item => {
            if(item.id === code) {
              item.income = (newShare * Number(item.expectGrowth) * Number(item.expectWorth) / (100 + Number(item.expectGrowth))).toFixed(2);
            }
          });
          _this.refreshData(fundData);
          saveFund();
        } else if (res.cancel) {
          console.log('取消修改');
        }
      }
    });
  }

})
