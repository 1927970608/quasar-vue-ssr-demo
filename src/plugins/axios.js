import api from 'src/api'

export default ({ Vue }) => {
  Vue.prototype.$http = api
}
