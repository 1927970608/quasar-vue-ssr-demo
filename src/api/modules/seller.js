import { sellerUrl } from 'src/config/env'
import { get, post } from '../../utils/http'

const apis = {
  // 分页获取商家信息
  getSellersPage: get(`${sellerUrl}/api/seller/getsellerspage`),
  // 获取商家详情
  getSeller: get(`${sellerUrl}/api/seller/getseller`),
  // 获取当前登录用户信息(买家)
  getLoginUser: get(`${sellerUrl}/api/user/getloginuser`),
  // 获取商家中心信息
  getSellerCenter: get(`${sellerUrl}/api/seller/getsellercenter`),
  // 新增或更新企业收款信息
  addOrUpdateDueBank: post(`${sellerUrl}/api/seller/duebank/add`),
  // 更新开票类型
  updateInvoice: post(`${sellerUrl}/api/seller/invoice/update`),
  // 更新物流信息
  updateExpress: post(`${sellerUrl}/api/seller/express/update`),
  // 更新结算方式
  updateSettlementTime: post(`${sellerUrl}/api/seller/settlementtime/update`),
  // 设置交易币别
  addCurrency: post(`${sellerUrl}/api/seller/currency/add`),
  // 获取交易币别
  getCurrency: get(`${sellerUrl}/api/seller/currency/get`),
  // 卖家身份是否激活
  enabledSeller: get(`${sellerUrl}/api/seller/enabled`)
}

export default apis
