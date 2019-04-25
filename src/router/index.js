import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from '../store'
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const route = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE || 'history',
    base: process.env.VUE_ROUTER_BASE || '/'
  })
  route.beforeEach((to, from, next) => {
    // 登陆守卫
    if (to.meta.title) {
      // console.log(to.meta)
      // document.title = to.meta.title
    }
    // store.dispatch('options/setRouterLoading', true)
    // if (!store.state.auth.user.getAuthed) {
    //   store.dispatch('auth/getAuth').then(() => {
    //     next()
    //   }, () => {
    //     next()
    //   })
    // } else {
    //   next()
    // }
    next()
  })

  route.afterEach(() => {
    // store.dispatch('options/setRouterLoading', false)
    // document.getElementById('app').scrollTop = 0
  })
  return route
}
