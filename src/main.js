import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store';
// 引入element-ui组件
import { Button, MessageBox } from 'element-ui';
// 三级联动组件==>全局组件
import { TypeNav, Carousel, Pagination } from '@/components';
// 注册组件：第一个参数(全局组件的名字)，第二个参数(哪一个组件)
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);

//ElementUI注册组件的另一种方式
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入mockServer.js
import '@/mock/mockServer';
//引入swiper样式
import 'swiper/css/swiper.css';
//统一接口api文件里面全部请求参数
import * as API from '@/api';
//引入vue-lozyload
import VueLazyload from 'vue-lazyload';
import loading from '@/assets/loading.gif';
import errorImg from '@/assets/error.png';

//引入自定义插件
import myPlugins from '@/plugins/myPlugins';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImg,
  loading: loading,
});

Vue.use(myPlugins, {
  name: 'upper',
});

// 引入表单校验插件
import '@/plugins/validate';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus的配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由 组件身上拥有$route和$router属性
  router,
  // 注册仓库 组件实例身上会多一个$state属性
  store
}).$mount('#app')
