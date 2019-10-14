//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      {
        url: '',
        image: 'iconfont icon-chongzhi1',
        text: '充值',
        color: 'color:#63B8FF'
      }, {
        url: '',
        image: 'iconfont icon-tixian',
        text: '提现',
        color: 'color:red'
      }
    ],
    items2: [
      {
        url: '',
        image: 'iconfont icon-yinhangqia',
        text: '银行卡',
        color: 'color:#63B8FF'
      }, {
        url: '',
        image: 'iconfont icon-jiaoyijilu',
        text: '交易记录',
        color: 'color:red'
      }
    ],

  }
})
