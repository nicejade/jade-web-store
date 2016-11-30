import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})