import { ssoUrl, ssoRestUrl } from '@/config/env'
const state = {
  // 控制全局loading
  showLoading: false,
  // 控制路由的loading
  routerLoading: false
}

// getters
const getters = {
  // 账户中心地址
  ssoUrl: () => {
    return ssoUrl
  },
  ssoRestUrl: () => {
    return ssoRestUrl
  },
  // 登录地址
  /* disabled no-unused-vars */
  loginUrl: (state, getters) => {
    return `${getters.ssoUrl}/login.html`
  },
  // 退出地址
  /* disabled no-unused-vars */
  logoutUrl: (state, getters) => {
    return `${getters.ssoUrl}/loginOut.html?baseUrl=${getters.ssoRestUrl}`
  },
  // 注册地址
  registerUrl: (state, getters) => {
    return `${getters.ssoUrl}/companyRegister.html`
  },
  // 账户云中心地址
  ssoCenterUrl: (state, getters) => {
    return `${getters.ssoUrl}/index.html`
  }
}

// actions
const actions = {
  // 设置loading状态
  setShowLoading({ commit }, isShow) {
    commit('SET_SHOW_LOADING', isShow)
  },
  setRouterLoading({ commit }, data) {
    commit('SET_ROUTER_LOADING', data)
  }
}

// mutations
const mutations = {
  SET_SHOW_LOADING(state, isShow) {
    state.showLoading = isShow
  },
  SET_ROUTER_LOADING(state, data) {
    state.routerLoading = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
