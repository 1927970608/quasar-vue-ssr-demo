import { ssoRestUrl } from 'src/config/env'
import { get, post } from '../../utils/http'

const apis = {
  // 获取用户信息
  getUserInfo: get(`${ssoRestUrl}/api/current/user/info/get`),
  switchEnterprise: post(`${ssoRestUrl}/api/login/enterprise/switch`),
  logout: post(`${ssoRestUrl}/api/user/logout`)
}

export default apis
