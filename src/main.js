import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store';
// 三级联动组件==>全局组件
import { TypeNav } from '@/components';
// 注册组件：第一个参数(全局组件的名字)，第二个参数(哪一个组件)
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由 组件身上拥有$route和$router属性
  router,
  // 注册仓库 组件实例身上会多一个$state属性
  store
}).$mount('#app')
