import { Home, Search, Register, Login, Detail, AddCartSuccess, ShopCart, Trade, Pay, PaySuccess, Center, MyOrder, GroupOrder } from '@/views';

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
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      show: true,
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      show: true,
    }
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