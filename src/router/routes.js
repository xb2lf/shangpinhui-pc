const Home = () => import('@/views/Home');
const Search = () => import('@/views/Search');
const Register = () => import('@/views/Register');
const Login = () => import('@/views/Login');
const Detail = () => import('@/views/Detail');
const AddCartSuccess = () => import('@/views/AddCartSuccess');
const ShopCart = () => import('@/views/ShopCart');
const Trade = () => import('@/views/Trade');
const Pay = () => import('@/views/Pay');
const PaySuccess = () => import('@/views/PaySuccess');
const Center = () => import('@/views/Center');
const MyOrder = () => import('@/views/MyOrder');
const GroupOrder = () => import('@/views/GroupOrder');

/* 
 * 路由懒加载
 *  当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应 *  的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
 */



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
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: {
      show: true,
    }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true,
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      show: true,
    }
  },
  {
    path: '/trade',
    component: Trade,
    meta: {
      show: true,
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 交易页面只能从购物车跳转
      from.path === '/shopcart' ? next() : next(false);
    },
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      show: true,
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 交易页面只能从购物车跳转
      from.path === '/trade' ? next() : next(false);
    },
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      show: true,
    },
    // 路由独享守卫
    /* beforeEnter: (to, from, next) => {
      // 支付成功页面只能从支付跳转
      from.path === '/pay' ? next() : next(false);
    }, */
  },
  {
    path: '/center',
    component: Center,
    meta: {
      show: true,
    },
    //子路由(二级路由)
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      {
        path: '/center',
        redirect: '/center/myorder',
      },
    ],
  },
  // 重定向,在项目跑起来的时候，访问/，立马让它重定向到首页
  {
    path: '*',
    redirect: '/home',
  },
];

export default routes