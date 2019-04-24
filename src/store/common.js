import apis from '../../api'
const state = {
  cartCount: 0
}

// getters
const getters = {}

// actions
const actions = {
  // 获取登录信息
  getCartCount({ commit }) {
    return apis.trade.countCartProduct().then(res => {
      commit('SET_CARTCOUNT', res.data.count || 0)
    })
  }
}

// mutations
const mutations = {
  SET_CARTCOUNT(state, data) {
    state.cartCount = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
