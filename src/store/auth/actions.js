import apis from 'src/api'
export function getAuth ({
  commit
}) {
  return apis.sso.getUserInfo().then(
    res => {
      let user = res.data
      if (user.userInfo) {
        user.logged = true
      }
      commit('SET_AUTH', user || {})
    },
    () => {
      commit('SET_AUTH', {})
    }
  )
}
// 获取登录信息

export function getImAccount ({
  commit
}) {
  let options = {
    appCode: 'APP_MALL',
    callback (count) {
      if (count === 0) {
        commit('SET_SHOWREDDOT', false)
      } else {
        commit('SET_SHOWREDDOT', true)
      }
    }
  }
  window.imsdk.default.getAccount(options).then(data => {
    if (data.code) {
      commit('HAS_IM_ACCOUNT', true)
    } else {
      commit('HAS_IM_ACCOUNT', false)
    }
  })
}
