import { trade, sampleCode, b2bOrder } from './baseCode'
export const comHeader = {
  computed: {
    // 是否首页相关页面（除买卖家、交易页面）
    isShow() {
      return !this.baseUtils.startWith(this.$route.path, '/user', '/applyInvoice', '/vendor', '/pay', '/openVendor', '/sample')
    }
  }
}
export const sendGood = {
  methods: {
    onCheckAll(value) {
      this.dialogProduct.forEach(o => {
        o.checked = value
      })
    },
    checkCheckCount() {
      let checkedCount = 0
      this.dialogProduct.forEach(o => {
        if (o.checked) {
          checkedCount++
        }
      })
      if (checkedCount === this.dialogProduct.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
    changeItemChecked(item) {
      if (item.checked) {
        item.checked = false
        this.checkAll = false
      } else {
        item.checked = true
        this.checkCheckCount()
      }
    }
  }
}
export const comTrade = {
  filters: {
    // 订单状态
    orderStatus: function(type) {
      let sta = ''
      switch (type) {
        case trade.orderStatus.ORDER_WAIT_PAY:
          sta = '待支付'
          break
        case trade.orderStatus.ORDER_WAIT_RECEIPT:
          sta = '待收款'
          break
        case trade.orderStatus.ORDER_WAIT_DELIVERY:
          sta = '待发货'
          break
        case trade.orderStatus.ORDER_WAIT_RECEIVE:
          sta = '待收货'
          break
        case trade.orderStatus.order_b2b_wait_delivery:
          sta = '待发货'
          break
        case trade.orderStatus.ORDER_WAIT_RECONCILIATION:
          sta = '待对账'
          break
        case trade.orderStatus.ORDER_SUCCESS:
          sta = '交易成功'
          break
        case trade.orderStatus.ORDER_CANCEL:
          sta = '已取消'
          break
        default:
          sta = ''
      }
      return sta
    },
    // 发票类型
    invoiceType: function(type) {
      let sta = ''
      switch (type) {
        case 142000:
          sta = '增值税普通发票'
          break
        case 142010:
          sta = '增值税专用发票'
          break
        default:
          sta = ''
      }
      return sta
    },
    // 发票状态
    invoiceStatus: function(type) {
      let sta = ''
      switch (type) {
        case 142020:
          sta = '未开票'
          break
        case 142030:
          sta = '已开票'
          break
        default:
          sta = ''
      }
      return sta
    },
    // 样品是免费还是到付
    sampleType: function(type) {
      let sta = ''
      switch (type) {
        case 134010:
          sta = '包邮'
          break
        case 134020:
          sta = '到付'
          break
        default:
          sta = ''
      }
      return sta
    }
  },
  methods: {
    /*
     * 添加产品进购物车
     * params:
     *     obj => 产品对象
     *     amount => 数量
     * */
    addCart(obj, amount) {
      if (obj && obj.code && amount) {
        if (obj.buyAble !== 132011) {
          let params = {
            productCode: obj.code,
            amount: amount
          }
          this.$http.trade.addProductToCart(params).then(res => {
            this.requestDeal(res, () => {
              this.$message.success('添加成功')
              // 刷新购物车数量
              this.$store.dispatch('common/getCartCount')
            })
          })
        }
      }
    },
    /*
     * 立即购买
     * params:
     *     obj => 产品对象，
     *     amount => 采购数量
     *
     * */
    buyNow(obj, amount) {
      if (obj && amount) {
        if (obj.buyAble !== 132011) {
          obj.amount = amount
          this.$http.trade.checkPrice({ validateProduct: [obj], wantedBuy: true }).then(res => {
            this.requestDeal(res, () => {
              this.$router.push(`/pay?code=${obj.code}&amount=${amount}&orderType=${encodeURIComponent('141100')}`)
            })
          })
        }
      }
    },
    /*
     * 领取样品
     * params:
     *     code => 样品code，
     *     amount => 领取数量(默认为1)
     *
     * */
    goSample(code, amount) {
      this.loginInterceptor(() => {
        this.$http.trade
          .checkSamplePrice({
            code: code,
            amount: amount,
            wantedBuy: true
          })
          .then(res => {
            this.requestDeal(res, () => {
              window.open(`/sample/${code}`)
            })
          })
      })
    }
  }
}

export const demand = {
  methods: {
    // 初始化首页的需求信息
    initDemandStatus(demandList) {
      this.$http.demand
        .findOfferStatusByCodeList({
          code: demandList.reduce((arr, demand) => {
            arr.push(demand.code)
            return arr
          }, [])
        })
        .then(statusRes => {
          this.requestDeal(statusRes, statusData => {
            statusData.offerStatus.forEach((status, index) => {
              this.$set(demandList[index], 'status', status)
            })
          })
        })
    }
  }
}

// 样品
export const sample = {
  filters: {
    expressFareTypeFilter(val) {
      return (val === sampleCode.expressFareType.NO_FARE && '包邮') || (val === sampleCode.expressFareType.PAY_ADDR && '到付') || '-'
    }
  }
}

// b2b采购变更单
export const b2bChangeOrder = {
  filters: {
    changeStatusFilter(val) {
      let sta = ''
      switch (val) {
        case b2bOrder.changeOrderStatus.ORDER_WAIT_CONFIRM:
          sta = '待供应商确认'
          break
        case b2bOrder.changeOrderStatus.ORDER_NOT_CONFIRM:
          sta = '无需确认'
          break
        case b2bOrder.changeOrderStatus.ORDER_AGREE:
          sta = '已同意'
          break
        case b2bOrder.changeOrderStatus.ORDER_DISAGREE:
          sta = '不同意'
          break
        default:
          sta = ''
      }
      return sta
    }
  }
}
