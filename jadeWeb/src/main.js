import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import Routes from './routes'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: Routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
