import { advUrl } from 'src/config/env'
import { get } from 'src/utils/http'

const apis = {
  // 获取广告位详情
  getAdvertisement: get(`${advUrl}/api/commercial/get`)
}
export default apis
