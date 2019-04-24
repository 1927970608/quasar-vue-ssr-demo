export function SET_SHOWREDDOT (state, data) {
  state.showRedDot = data
}
export function SET_AUTH (state, data) {
  state.user = data
  // 已获取状态
  state.user.getAuthed = true
}
export function HAS_IM_ACCOUNT (state, data) {
  state.hasImAccount = data
}
