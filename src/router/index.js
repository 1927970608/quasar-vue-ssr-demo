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
    mode: process.env.VUE_ROUTER_MODE || 'history',
    base: process.env.VUE_ROUTER_BASE || '/'
  })
  route.beforeEach((to, from, next) => {
    // 登陆守卫
    if (to.meta.title) {
      // console.log(to.meta)
      // document.title = to.meta.title
    }
    next()
  })

  route.afterEach(() => {
    // store.dispatch('options/setRouterLoading', false)
    // document.getElementById('app').scrollTop = 0
  })
  return route
}
