import { productUrl } from 'src/config/env'
import { get, post, upload } from '../../utils/http'

const apis = {
  getProduct: (id) => {
    return get(`${productUrl}/topic/${id}`)()
  }
}

export default apis
