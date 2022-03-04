import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '@/store';

// 使用插件
Vue.use(VueRouter);

// 先把VueRouter原型对象的push/replace，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
/* 
 * 重写push和replace
 *  第一个参数：告诉原来push方法，往哪里跳转(传递哪些参数)
 *  第二个参数：成功回调
 *  第三个参数：失败回调
 */
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
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
});

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  /* 
   * to  获取到将要跳转的路由的信息
   * from 获取到是从哪个路由跳转过来的信息
   * next 放行函数
   * next() 全部放行
   * next('/home') 放行到指定路由
   * next(false) 中断当前的导航
   * next(error)
   */
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    // 用户已登录
    if (to.path === '/login' || to.path === '/register') {
      next('/home');
    } else {
      if (name) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          //token失效了,获取不到用户信息，重新登录
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  } else {
    // 用户未登录：不能跳转交易相关、支付相关、个人中心
    const toPath = to.path;
    const pathArr = ['/trade', '/pay', '/pay/success', '/center', '/center/myorder', '/center/grouporder'];
    pathArr.includes(toPath) ? next(`/login?redirect=${toPath}`) : next();
    /* if (toPath.includes('/trade') || toPath.includes('/pay') || toPath.includes('/pay')) {
      next(`/login?redirect=${toPath}`)
    } else {
      next();
    } */

  }
});

export default router