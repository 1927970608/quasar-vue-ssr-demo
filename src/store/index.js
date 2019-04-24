import Vue from 'vue'
import Vuex from 'vuex'
// import options from './modules/options'
import auth from 'src/store/auth'
import product from 'src/store/product'
// import common from './modules/common'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // 一些全局状态
      // options,
      // 登录状态
      auth,
      product
      // 业务store
      // common
    }
  })

  return Store
}
