// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Navi from './components/Navi/Navi.vue'

Vue.use(ElementUI)

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 



Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(Navi)
})
