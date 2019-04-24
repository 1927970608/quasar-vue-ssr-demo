import { demandUrl } from 'src/config/env'
import { get, post } from '../../utils/http'

const apis = {
  // 发布需求
  addDemand: post(`${demandUrl}/api/demand/add`, true),
  // 修改需求
  modifyDemand: post(`${demandUrl}/api/demand/modify`, true),
  // 删除需求
  delDemand: get(`${demandUrl}/api/demand/del`),
  // 首页查询需求
  indexGetDemand: get(`${demandUrl}/api/demand/index/get`),
  // 我的需求查询
  v2myPageDemand: get(`${demandUrl}/api/v2/demand/my/get`),
  // 批量删除
  batchDelete: post(`${demandUrl}/api/demand/del/batch`),
  // 根据需求code列表查询报价状态
  findOfferStatusByCodeList: post(`${demandUrl}/api/demand/offer/status/get`),
  // 发布报价
  addOffer: post(`${demandUrl}/api/offer/add`, true),
  // b2b发布报价
  v2addOffer: post(`${demandUrl}/api/v2/offer/add`, true),
  // 卖家分页查询报价
  v2sellerPageOffer: get(`${demandUrl}/api/v2/offer/page/get`),
  // 根据需求查报价列表
  findOfferByDemand: get(`${demandUrl}/api/offer/by/demand/get`)
}
export default apis
