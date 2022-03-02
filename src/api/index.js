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