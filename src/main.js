import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
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
    },  {
      path: '/login',
      component: () => import('./pages/Login')
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})