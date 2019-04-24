import axios from 'axios'
// import store from '../store'
// import router from '../router'

axios.defaults.timeout = 80000
axios.defaults.withCredentials = true

// let reqCount = 0 // 请求计数器

// const setLoadingCount = () => {
//   store.dispatch('options/setShowLoading', reqCount > 0)
// }

axios.interceptors.request.use(
  config => {
    if (config.headers.isLoading) {
      // ++reqCount
      // setLoadingCount()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.data.respHeader) {
      if (response.data.respHeader.code === -201 && !/\/api\/current\/user\/info\/get/.test(response.config.url)) {
        // 登录拦截
        // return (window.location.href = store.getters['options/loginUrl'] + `?returnUrl=${encodeURIComponent(window.location.href)}`)
      } else if (response.data.respHeader.code === -202) {
        // 个人账户
        // router.app.goRouter('/')
      } else if (response.data.respHeader.code === 122010) {
        // 企业卖家未激活
        // router.app.goRouter('/openVendor')
      }
    }
    if (response.config.headers.isLoading) {
      // --reqCount
      // setLoadingCount()
    }
    return response
  },
  error => {
    if (error.config.headers.isLoading) {
      // --reqCount
      // setLoadingCount()
    }
    return Promise.reject(error)
  }
)

export function get (url, loading = false) {
  return function (params) {
    return axios({
      method: 'get',
      url: `${url}?t=${new Date().getTime()}`,
      params,
      headers: {
        isLoading: loading
      }
    })
  }
}
export function upload (url, loading = false) {
  return function (params) {
    return axios({
      method: 'post',
      url,
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data',
        isLoading: loading
      }
    })
  }
}

export function post (url, loading = false) {
  return function (params) {
    return axios({
      method: 'post',
      url,
      data: params,
      headers: {
        isLoading: loading
      }
    })
  }
}
