import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bulma/css/bulma.css'
import VueDataValidator from 'vue-data-validator'

import App from 'components/App'
import NewsList from 'components/NewsList'
import NewsDetail from 'components/NewsDetail'
import User from 'components/User'

Vue.use(VueRouter)
Vue.use(VueDataValidator.validator, VueDataValidator.options)

const routes = [
  { 
    path: '/', 
    component: App,
    children: [
      {
        path: '',
        component: NewsList  
      },
      {
        path: 'news',
        component: NewsDetail
      },
      {
        path: 'user/:id',
        component: User
      }
    ]
  }
]

const router = new VueRouter({ routes })

// router.beforeEach(({ to, from, next, abort, redirect }) => {
//   console.info(`[RouteLogger] ${decodeURI(from.path)} => ${decodeURI(to.path)}`)
//   next()
// })

export default router