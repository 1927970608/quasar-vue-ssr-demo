import { productUrl } from 'src/config/env'
import { get, post, upload } from '../../utils/http'

const apis = {
  // 上传或修改产品
  addOrUpdateProduct: post(`${productUrl}/api/product/save`),
  // 批量上传
  addProducts: upload(`${productUrl}/api/product/batchsave`),
  // 上架
  release: post(`${productUrl}/api/product/release`),
  // 批量上架
  batchRelease: post(`${productUrl}/api/product/batchrelease`),
  // 下架
  revoke: post(`${productUrl}/api/product/revoke`),
  // 批量下架
  batchRevoke: post(`${productUrl}/api/product/batchrevoke`),
  // 分页获取当前企业的产品列表
  getEnterpriseProducts: get(
    `${productUrl}/api/product/enterprises/products/list`
  ),
  // 分页获取指定企业的产品列表
  getProductsPageByEnterprise: get(
    `${productUrl}/api/product/enterprise/products`
  ),
  // 分页获取产品列表
  getProductsPage: get(`${productUrl}/api/product/products`),
  // 获取产品详情
  getProduct: get(`${productUrl}/api/product/product`),
  // 删除产品
  deleteProduct: post(`${productUrl}/api/product/delete`),
  // 批量删除产品
  batchDelete: post(`${productUrl}/api/product/deleteproducts`),
  // productCollection
  // 收藏
  collect: post(`${productUrl}/api/product/collect`, true),
  // 取消收藏
  revokeCollect: post(`${productUrl}/api/product/revokecollect`),
  // 批量取消收藏
  batchrevokeCollect: post(`${productUrl}/api/product/batchrevokecollect`),
  // 分页获取产品收藏
  getCollectionsPage: get(`${productUrl}/api/product/getcollectionspage`),
  // 通过产品编号取消收藏
  revokeCollectByProduct: post(
    `${productUrl}/api/product/revokecollect/productcode`,
    true
  ),
  // 获取全部包装方式
  getAllPacking: get(`${productUrl}/api/product/packing/getAll`),
  // 分页获取非法产品信息
  getIllegalProductPage: get(`${productUrl}/api/product/illegal/getpage`),
  // 获取非法产品详情
  getIllegalProduct: get(`${productUrl}/api/product/illegal/get`),
  // 修改非法产品信息
  updateIllegalProduct: post(`${productUrl}/api/product/illegal/update`),
  // 非法产品验证
  validateIllegalProduct: post(`${productUrl}/api/product/illegal/validate`),
  // 非法产品批量上架
  releaseIllegalProducts: post(
    `${productUrl}/api/product/illegal/batchrelease`
  ),
  // 非法产品单个上架
  releaseIllegalProduct: post(`${productUrl}/api/product/illegal/release`),
  // 验证产品信息
  validateProduct: post(`${productUrl}/api/product/validate`),
  // 下载当前企业已上架产品信息
  downloadProducts: `${productUrl}/api/product/download`,
  // 新增或更新样品信息
  addOrUpdateSample: post(`${productUrl}/api/product/sample/save`, true),
  // 取消样品
  cancelSample: post(`${productUrl}/api/product/sample/cancel`),
  // 展示样品
  reshowSample: post(`${productUrl}/api/product/sample/reshow`),
  // 分页获取样品信息
  getSamplesPage: get(`${productUrl}/api/product/sample/getpage`),
  // 产品首次上传
  initialAddProduct: post(`${productUrl}/api/product/initialadd`)
}

export default apis
