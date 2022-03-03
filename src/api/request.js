// 对axios进行二次封装
import axios from 'axios';
import nprogress from 'nprogress'; // 引入进度条
import 'nprogress/nprogress.css'; // 引入进度条样式
import store from '@/store'; // 在当前模块下引入store

//利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
  // 配置对象
  baseURL: '/api', // 基础路径
  timeout: 5000, // 超时时间(毫秒)
});
// 请求拦截器:在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  // config:配置对象，有一个属性很重要，header请求头
  if (store.state.detail.uuid_token) {
    //请求头添加一个字段(userTempId)
    config.headers.userTempId = store.state.detail.uuid_token
  }
  //需要携带token给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }
  nprogress.start(); //进度条开始
  return config;
});
//响应拦截器
requests.interceptors.response.use((res) => {
  // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
  nprogress.done(); //进度条结束
  return res.data
}, (error) => {
  // 失败的回调函数
  return Promise.reject(new Error('fail'))
})

// 对外暴露
export default requests