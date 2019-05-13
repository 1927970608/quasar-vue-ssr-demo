// src/router/routes.js

import Home from 'layouts/Home'
import Product from 'pages/Product'

const routes = [
  {
    path: '/',

    // we use /src/layouts/User component which is imported above
    component: Home,

    // hey, it has children routes and User has <router-view> in it;
    // It is really a Layout then!
    children: [
      // Profile page
      {
        path: 'product/:id', // here it is, route /user/profile
        component: Product // we reference /src/pages/Profile.vue imported above
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
