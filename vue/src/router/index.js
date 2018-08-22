import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/discover'
    },
    {
      path: '/my',
      component: resolve => require(['../views/my/index.vue'], resolve)
    },
    {
      path: '/discover',
      component: resolve => require(['../views/discover/index.vue'], resolve)
    },
    {
      path: '/bookshelf',
      component: resolve => require(['../views/bookshelf/index.vue'], resolve)
    },
    {
      path: '/idea',
      component: resolve => require(['../views/idea/index.vue'], resolve)
    },
    {
      path: '/detail',
      component: resolve => require(['../views/detail/index.vue'], resolve)
    }
  ]
})
