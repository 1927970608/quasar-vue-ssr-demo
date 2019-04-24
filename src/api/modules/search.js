import { productUrl } from 'src/config/env'
import { get } from '../../utils/http'

const apis = {
  // 搜索产品
  searchProduct: get(`${productUrl}/api/search/product`)
}

export default apis
