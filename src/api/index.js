// 对API进行统一管理
import requests from './request';

// 三级联动接口 /api/product/getBaseCategoryList

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });