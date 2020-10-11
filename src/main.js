

//入口文件
import Vue from 'vue'
//导入app根组件
import App from './App.vue'
//导入路由
import router from './router.js'

//导入mint-ui组件
import {Header as header} from 'mint-ui'
Vue.component(header.name,header)

import './lib/dist/css/mui.css'
const vm = new Vue({
  el: '#app',
  render: p => p(App),
  router
})