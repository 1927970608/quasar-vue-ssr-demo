// 产品
export const product = {
  // 上架状态
  status: {
    // 已上架
    invoke: 131020,
    // 未上架
    revoke: 131010
  },
  // 非法产品验证状态
  illegalStatus: {
    // 验证通过
    valid: 133010,
    // 验证失败
    invalid: 133020
  }
}

// 发票
export const invoice = {
  invoiceType: {
    // 普票
    NORMAL: 142000,
    // 专票
    SPECIFIC: 142010
  },
  buyerType: {
    // 个人
    SELF: 142020,
    // 企业
    ENTERPRISE: 142030
  }
}

// 购物车
export const cart = {
  /*产品失效状态码
   * 131031 => 已下架
   * 131032 => 库存不足
   * 131036 => 产品不存在
   * 131038 => 产品无单价信息
   * */
  invalidCode: [131031, 131032, 131036, 131038]
}

// 订单
export const trade = {
  payTypes: {
    MONTH15: '月结15天',
    MONTH30: '月结30天',
    MONTH60: '月结60天',
    MONTH90: '月结90天'
  },
  orderStatus: {
    /**
     * 待支付
     */
    ORDER_WAIT_PAY: 141010,
    /**
     * 待收款
     */
    ORDER_WAIT_RECEIPT: 141020,
    /**
     * 待发货
     */
    ORDER_WAIT_DELIVERY: 141030,
    /**
     * b2b待发货
     */
    order_b2b_wait_delivery: 141031,
    /**
     * 待收货
     */
    ORDER_WAIT_RECEIVE: 141040,
    /**
     * 待对账
     */
    ORDER_WAIT_RECONCILIATION: 141050,
    /**
     * 交易成功
     */
    ORDER_SUCCESS: 141091,
    /**
     * 交易取消
     */
    ORDER_CANCEL: 141095
  }
}

// 样品
export const sampleCode = {
  // 产品样品状态
  sampleStatus: {
    // 存在样品
    ALIVE: 134040,
    // 不存在样品
    NOT_ALIVE: 134041
  },
  // 样品状态
  sampleAliveStatus: {
    // 正常
    NORMAL: 134050,
    // 已取消
    CANCELED: 134090
  },
  expressFareType: {
    // 包邮
    NO_FARE: 134010,
    // 到付
    PAY_ADDR: 134020
  }
}

// 对账单
export const balanceOfAccount = {
  // 对账单状态
  accountStatus: {
    // 待对账
    AWAIT_ACCOUNT: 141050,
    // 已对账
    FINISHED_ACCOUNT: 141010
  }
}

// 发货状态
export const noticeStatus = {
  // 待发货
  PURCHASE_NOTICE_WAIT_TO_SEND: 144010,
  // 已发货
  PURCHASE_NOTICE_SEND: 144020,
  // 已取消
  PURCHASE_NOTICE_CANCEL: 144030,
  // 备料中
  PURCHASE_NOTICE_WATIING: 144040
}

// b2b订单变更单
export const b2bOrder = {
  changeOrderStatus: {
    /**
     * 待供应商确认
     */
    ORDER_WAIT_CONFIRM: 145010,
    /**
     * 无需确认
     */
    ORDER_NOT_CONFIRM: 145020,
    /**
     * 已同意
     */
    ORDER_AGREE: 145030,
    /**
     * 不同意
     */
    ORDER_DISAGREE: 145040
  }
}

export const appCode = 'APP_MALL'
