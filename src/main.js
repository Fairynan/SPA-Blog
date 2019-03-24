import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  hashbang: false,
  routes: [
    {
      path: '*',
      component: () => import('./pages/Home')
    },
    {
      path: '/home',
      component: () => import('./pages/Home')
    }, {
      path: '/about',
      component: () => import('./pages/About')
    }, {
      path: '/article',
      component: () => import('./pages/Article')
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})