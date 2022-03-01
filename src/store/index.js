import Vue from 'vue';
import Vuex from 'vuex';
// 需要使用插件一次
Vue.use(Vuex);

//引入home模块和search模块
import home from './home';
import search from './search';

//对外暴露Store类的一个实例
const store = new Vue.store({
  // 实现Vuex仓库模式开发存储数据
  modules: {
    home,
    search
  }
})




export default store