// 对API进行统一管理
import requests from './request';
import mockRequests from './mockRequest';

// 三级联动接口 /api/product/getBaseCategoryList
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');

// 获取首页banner(Home首页轮播图数据)
export const reqBannerList = () => mockRequests.get('/banner');

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

// 获取搜索模块数据
export const reqSearchInfo = (params) => requests({
  url: '/list',
  method: 'post',
  data: params
});

// 获取产品详情信息
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

// 将产品添加到购物车中(或者更新某一个产品的个数)
export const reqAddUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post', });

// 获取购物车列表
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

// 删除购物车商品
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

// 切换商品选中状态 
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

// 获取验证码 
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

// 用户注册 data: { phone, password, code } 
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', method: 'post', data });

// 用户登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', method: 'post', data });

// 获取用户信息(携带token) 
export const reqGetUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });

// 用户退出登录
export const reqUserLogout = () => requests({ url: '/user/passport/logout', method: 'get' });

// 获取用户地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });

// 获取订单交易页信息
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data });

//获取订单支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' });

//获取支付订单状态
export const reqPayStatus = (orderId) => requests({ url: `payment/weixin/queryPayStatus/${orderId}`, method: 'get' });

// 获取订单列表
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });


