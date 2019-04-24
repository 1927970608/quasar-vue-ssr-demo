import { fileUrl } from 'src/config/env'
import { upload } from '../../utils/http'

const apis = {
  // 上传
  upload: upload(`${fileUrl}/file/uploadfile`, true)
}

export default apis
