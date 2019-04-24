import { tradeUrl } from 'src/config/env'
import { get, post } from '../../utils/http'
const apis = {
  /**
   * B2B 客户采购验退验收接口 start
   * */
  // 卖家分页获取验收单
  sellerGetB2BOrderAcceptPage: get(`${tradeUrl}/api/order/accept/seller/page`, true),
  // 卖家获取验收单详情
  sellerGetB2BOrderAccept: get(`${tradeUrl}/api/order/accept/seller/get`),
  // 卖家分页查询验退单
  getOrderReturnsPage: get(`${tradeUrl}/api/order/return/page`, true),
  // 卖家查询验退单详情
  getOrderReturnsDetail: get(`${tradeUrl}/api/order/return/detail`),
  /**
   * B2B发货接口 start
   * */
  // 分页获取发货提醒
  getInvoiceNoticesPage: get(`${tradeUrl}/api/invoicenotice/page`),
  // 针对单个送货提醒 —— 去送货操作
  sendByInvoiceNotice: post(`${tradeUrl}/api/invoicenotice/send`, true),
  // 通过送货提醒获取发货单明细 —— 界面弹出窗
  getInvoiceItemByNotice: get(`${tradeUrl}/api/invoicenotice/invoiceitem/get`),
  /**
   * b2b样品相关
   */
  // b2b样品订单详情页-卖家
  sellerGetB2BSampleOrderDetail: get(`${tradeUrl}/api/trade/sampleOrder/b2b/seller/detail/get`),
  // 查询b2b送样物流信息-卖家
  sellerGetB2BSampleOrderSend: get(`${tradeUrl}/api/trade/sampleOrder/sendItem/b2b/seller/get`),
  // 送样B2b-卖家
  sellerB2BSampleOrderSend: post(`${tradeUrl}/api/trade/sampleOrder/b2b/send`),
  /**
   *  买家对账接口
   * */
  // 买家生成对账单（商城数据）
  buyerFindReconciliationsPage: get(`${tradeUrl}/api/trade/order/buyer/reconciliate/list/get`),
  // 买家分页对账单列表（包括B2B数据）
  v2buyerFindReconciliationsPage: get(`${tradeUrl}/api/v2/trade/order/buyer/reconciliate/list/get`),
  // 买家查询对账单详情（使用的B2B模板）
  v2buyerFindReconciliation: get(`${tradeUrl}/api/v2/trade/order/buyer/reconciliate/get`),
  /**
   * 卖家对账接口
   * */
  // 卖家分页查询对账单（商城数据）
  sellerFindReconciliationsPage: get(`${tradeUrl}/api/trade/order/seller/reconciliate/list/get`),
  // 卖家分页查询对账单列表 （包括B2B数据）
  v2sellerFindReconciliationsPage: get(`${tradeUrl}/api/v2/trade/order/seller/reconciliate/list/get`),
  // 卖家查询对账单详情（使用的B2B模板）
  v2sellerFindReconciliation: get(`${tradeUrl}/api/v2/trade/order/seller/reconciliate/get`),
  // 卖家确认对账
  sellerAckReconciliation: post(`${tradeUrl}/api/trade/order/seller/reconciliate/ack`),
  // 卖家确认对账（包含B2B数据）
  v2sellerAckReconciliation: post(`${tradeUrl}/api/v2/trade/order/seller/reconciliate/ack`, true),
  /**
   * 接口
   * */
  // 卖家获取包裹
  sellerGetPackageList: get(`${tradeUrl}/api/trade/order/seller/package/get`),
  // 卖家新增包裹
  sellerAddPackage: post(`${tradeUrl}/api/trade/order/seller/package/add`),
  // 卖家修改包裹
  sellerModifyPackage: post(`${tradeUrl}/api/trade/order/seller/package/modify`),
  // 买家获取包裹列表
  buyerGetPackageList: get(`${tradeUrl}/api/trade/order/buyer/package/get`),

  // 添加收货地址
  addDeliveryAddr: post(`${tradeUrl}/api/trade/delivery/addr/add`, true),
  // 修改收货地址
  modifyDeliveryAddr: post(`${tradeUrl}/api/trade/delivery/addr/modify`, true),
  // 删除收货地址
  delDeliveryAddr: get(`${tradeUrl}/api/trade/delivery/addr/del`),
  // 设为默认收货地址
  defaultDeliveryAddr: get(`${tradeUrl}/api/trade/delivery/addr/default`),
  // 获取收货地址列表
  getDeliveryAddrList: get(`${tradeUrl}/api/trade/delivery/addr/get`),
  // 买家分页查询订单列表 (旧订单列表接口)
  buyerPageOrderList: get(`${tradeUrl}/api/trade/order/buyer/list/get`),
  // 买家分页查询订单列表v2 (新订单列表接口)
  V2BuyerPageOrderList: get(`${tradeUrl}/api/v2/trade/order/buyer/list/get`),
  // 买家查询商城订单详情
  buyerGetOrderDetail: get(`${tradeUrl}/api/trade/order/buyer/detail/get`),
  // 买家查询B2B订单详情
  buyerGetB2BOrderDetail: get(`${tradeUrl}/api/trade/order/b2b/buyer/detail/get`),
  // 买家统计订单状态数量
  buyerCountOrder: post(`${tradeUrl}/api/trade/order/buyer/count`),
  // 确认支付
  orderPay: post(`${tradeUrl}/api/trade/order/buyer/pay`, true),
  // 取消订单
  orderCancel: post(`${tradeUrl}/api/trade/order/buyer/cancel`),
  // 更新支付凭证
  updatePayFile: post(`${tradeUrl}/api/trade/order/buyer/payfile/update`, true),
  // 确认收货
  orderReceipt: post(`${tradeUrl}/api/trade/order/buyer/receipt`),
  // 卖家分页查询订单列表 (旧订单列表接口)
  sellerPageOrderList: get(`${tradeUrl}/api/trade/order/seller/list/get`),
  // 卖家分页查询订单列表v2 (新订单列表接口)
  V2SellerPageOrderList: get(`${tradeUrl}/api/v2/trade/order/seller/list/get`),
  // 卖家查询商城订单详情
  sellerGetOrderDetail: get(`${tradeUrl}/api/trade/order/seller/detail/get`),
  // 卖家查询B2B订单详情
  sellerGetB2BOrderDetail: get(`${tradeUrl}/api/trade/order/b2b/seller/detail/get`),
  // 卖家统计订单状态数量
  sellerCountOrder: post(`${tradeUrl}/api/trade/order/seller/count`),
  // 卖家确认收款
  orderEnsurePay: post(`${tradeUrl}/api/trade/order/seller/ensurepay`),
  // 确认发货
  orderDeliver: post(`${tradeUrl}/api/trade/order/seller/deliver`),
  // 卖家确认开票
  sellerBilling: post(`${tradeUrl}/api/trade/order/seller/billing`),
  // 卖家修改物流信息
  sellerModifyDeliver: post(`${tradeUrl}/api/trade/order/seller/deliver/modify`),
  // 添加产品进购物车
  addProductToCart: post(`${tradeUrl}/api/trade/cart/add`, true),
  // 获取购物车产品数量
  countCartProduct: get(`${tradeUrl}/api/trade/cart/count`),
  // 修改购物车里面的产品
  modifyCartProduct: post(`${tradeUrl}/api/trade/cart/modify`),
  // 查询购物车列表
  getCartList: get(`${tradeUrl}/api/trade/cart/list/get`),
  // 批量删除购物车产品
  delProductBatch: post(`${tradeUrl}/api/trade/cart/del`),
  // 下单
  addOrder: post(`${tradeUrl}/api/trade/order/add`, true),
  // 结算页产品信息获取
  getOrderProductInfo: post(`${tradeUrl}/api/trade/order/product/list/get`),
  // 结算页报价信息获取
  getOrderOfferInfo: post(`${tradeUrl}/api/trade/order/offer/list/get`),
  // 产品验证：价格计算
  checkPrice: post(`${tradeUrl}/api/trade/price/check`),
  // 批量获取订单付款信息
  getPaymentInfoByOrderBatch: post(`${tradeUrl}/api/trade/order/buyer/pay/info/get`),
  // 添加发票
  addInvoice: post(`${tradeUrl}/api/trade/invoice/add`, true),
  // 修改发票
  modifyInvoice: post(`${tradeUrl}/api/trade/invoice/modify`, true),
  // 删除发票
  delInvoice: get(`${tradeUrl}/api/trade/invoice/del`),
  // 设为默认发票
  defaultInvoice: get(`${tradeUrl}/api/trade/invoice/default`),
  // 获取发票列表
  getInvoiceList: post(`${tradeUrl}/api/trade/invoice/get`),
  // 添加发票寄送地址
  addInvoiceAddr: post(`${tradeUrl}/api/trade/invoice/addr/add`, true),
  // 修改发票寄送地址
  modifyInvoiceAddr: post(`${tradeUrl}/api/trade/invoice/addr/modify`, true),
  // 删除发票寄送地址
  delInvoiceAddr: get(`${tradeUrl}/api/trade/invoice/addr/del`),
  // 设为默认发票寄送地址
  defaultInvoiceAddr: get(`${tradeUrl}/api/trade/invoice/addr/default`),
  // 获取发票寄送地址列表
  getInvoiceAddrList: get(`${tradeUrl}/api/trade/invoice/addr/get`),
  // 申请开票
  orderApplyInvoice: post(`${tradeUrl}/api/trade/order/buyer/invoice`),
  // 买家生成对账单
  buyerNewReconciliation: post(`${tradeUrl}/api/trade/order/buyer/reconciliate/add`),
  // 买家查询对账单详情
  buyerFindReconciliation: get(`${tradeUrl}/api/trade/order/buyer/reconciliate/get`),
  // 买家订单列表tab获取
  buyerGetTabInfo: get(`${tradeUrl}/api/trade/order/buyer/ordertype/get`),
  // 卖家查询对账单详情
  sellerFindReconciliation: get(`${tradeUrl}/api/trade/order/seller/reconciliate/get`),
  // 卖家订单列表tab获取
  sellerGetTabInfo: get(`${tradeUrl}/api/trade/order/seller/ordertype/get`),
  // 通用价格计算
  calculatePrice: post(`${tradeUrl}/api/trade/price/calculate`),
  /* 样品------------------------------------------------------ */
  // 下单
  addSampleOrder: post(`${tradeUrl}/api/trade/sampleOrder/add`, true),
  // 结算页样品信息获取
  getSampleOrderProductInfo: post(`${tradeUrl}/api/trade/sampleOrder/sample/list/get`),
  // 买家分页查询订单列表
  buyerPageSampleOrderList: get(`${tradeUrl}/api/trade/sampleOrder/buyer/list/get`),
  // 买家查询订单详情
  buyerGetSampleOrderDetail: get(`${tradeUrl}/api/trade/sampleOrder/buyer/detail/get`),
  // 买家确认支付
  sampleOrderPay: post(`${tradeUrl}/api/trade/sampleOrder/buyer/pay`, true),
  // 买家更新支付凭证
  sampleUpdatePayFile: post(`${tradeUrl}/api/trade/sampleOrder/buyer/payfile/update`, true),
  // 买家确认收货
  sampleOrderReceipt: post(`${tradeUrl}/api/trade/sampleOrder/buyer/receipt`),
  // 买家订单列表tab获取
  buyerGetSampleTabInfo: get(`${tradeUrl}/api/trade/sampleOrder/buyer/sampleOrderType/get`),
  // 卖家分页查询订单列表
  sellerPageSampleOrderList: get(`${tradeUrl}/api/v2/trade/sampleOrder/seller/list/get`),
  // 卖家查询订单详情
  sellerGetSampleOrderDetail: get(`${tradeUrl}/api/trade/sampleOrder/seller/detail/get`),
  // 卖家确认发货
  sampleOrderDeliver: post(`${tradeUrl}/api/trade/sampleOrder/seller/deliver`),
  // 卖家修改物流信息
  sellerModifySampleDeliver: post(`${tradeUrl}/api/trade/sampleOrder/seller/deliver/modify`),
  // 卖家确认收款
  sampleOrderEnsurePay: post(`${tradeUrl}/api/trade/sampleOrder/seller/ensurepay`),
  // 卖家订单列表tab获取
  sellerGetSampleTabInfo: get(`${tradeUrl}/api/trade/sampleOrder/seller/sampleOrderType/get`),
  // 批量获取订单付款信息
  getPaymentInfoBySampleOrderBatch: post(`${tradeUrl}/api/trade/sampleOrder/buyer/pay/info/get`),
  // 样品验证：价格计算
  checkSamplePrice: post(`${tradeUrl}/api/trade/sample/price/check`),
  // 获取买家中心工作台
  getBuyerDashBoard: get(`${tradeUrl}/api/trade/buyer/dashboard/get`),
  // 获取卖家中心工作台
  getSellerDashBoard: get(`${tradeUrl}/api/trade/seller/dashboard/get`),
  // 获取工作台b2b发货通知数量
  getInvoiceCount: get(`${tradeUrl}/api/invoicenotice/count/get`),
  /**
   * B2B买卖家采购变更单 start
   * */
  // 买家分页获取采购变更单
  buyerGetB2BOrderChangesPage: get(`${tradeUrl}/api/orderchange/buyer/page`),
  // 买家获取采购变更单详情
  buyerGetB2BOrderChange: get(`${tradeUrl}/api/orderchange/buyer/get`),
  // 卖家分页获取采购变更单
  sellerGetB2BOrderChangesPage: get(`${tradeUrl}/api/orderchange/seller/page`),
  // 卖家获取采购变更单详情
  sellerGetB2BOrderChange: get(`${tradeUrl}/api/orderchange/seller/get`),
  // 回复采购变更单
  replyB2BOrderChange: post(`${tradeUrl}/api/orderchange/seller/reply`, true)
  /**
   * B2B买卖家采购变更单 end
   * */
}

export default apis
