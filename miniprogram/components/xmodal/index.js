// components/xmodal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean, // 是否展示
    modalTitle: String,
    confirmText: String,
    cancelText: String,
    placeholder: String
  },

  observers: {
    'placeholder': function (value) {
      this.setData({
        inputValue: value
      });
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modalTitle: '修改持仓',
    confirmText: '确定',
    cancelText: '取消'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputChange(e) {
      this.setData({
        inputValue: e.detail.value
      });
    },
    onConfirmAction() {
      var share = Number(this.data.inputValue);
      if (isNaN(share) || share < 0) {
        wx.showToast({
          title: '请输入有效持仓',
          icon: 'none'
        })
        return;
      }
      this.triggerEvent("onConfirm", share)
    },
    onCancelAction() {
      this.triggerEvent("onCancel");
    }
  }
})
