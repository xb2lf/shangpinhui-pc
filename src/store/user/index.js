// 登录与注册模块的仓库
import { reqGetCode, reqUserRegister, reqUserLogin, reqGetUserInfo, reqUserLogout } from "@/api";
import { setToken, getToken, removeToken } from '@/utils/token';
// state：仓库存储数据的地方
const state = {
  code: '',
  token: getToken(),
  userInfo: {},
};
//mutations:修改state的唯一手段
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEAR(state) {
    state.token = '';
    state.code = '';
    state.userInfo = {};
    removeToken();
  }
};
//actions:处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    const result = await reqGetCode(phone);
    if (result.code === 200) {
      commit('GETCODE', result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户注册
  async userRegister({ commit }, user) {
    const result = await reqUserRegister(user);
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户登录
  async userLogin({ commit }, user) {
    const result = await reqUserLogin(user);
    if (result.code === 200) {
      commit('USERLOGIN', result.data.token);
      // 持久化存储token
      setToken(result.data.token);
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqGetUserInfo();
    if (result.code === 200) {
      commit('GETUSERINFO', result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户退出登录
  async userLogout({ commit }) {
    const result = await reqUserLogout();
    if (result.code === 200) {
      commit('CLEAR');
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更方便
const getters = {};

export default {
  /* namespaced: true, */
  state,
  mutations,
  actions,
  getters,
}
