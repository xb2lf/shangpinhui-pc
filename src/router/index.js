import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, Search, Register, Login } from '@/pages';

// 使用插件
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      show: true,
    }
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: Search,
    meta: {
      show: true,
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      show: false,
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      show: false,
    }
  },
  // 重定向,在项目跑起来的时候，访问/，立马让它重定向到首页
  {
    path: '*',
    redirect: '/home',
  },
];
// 先把VueRouter原型对象的push/replace，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push和replace
// 第一个参数：告诉原来push方法，往哪里跳转(传递哪些参数)
// 第二个参数：成功回调
// 第三个参数：失败回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router