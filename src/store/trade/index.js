// 计算模块的仓库
import { reqAddressInfo, reqOrderInfo } from "@/api";

// state：仓库存储数据的地方
const state = {
  addressList: [],
  orderInfo: {},
};
//mutations:修改state的唯一手段
const mutations = {
  GETUSERADDRESS(state, addressList) {
    state.addressList = addressList;
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo
  },
};
//actions:处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 获取用户地址信息
  async getUserAddress({ commit }) {
    const result = await reqAddressInfo();
    if (result.code === 200) {
      commit('GETUSERADDRESS', result.data)
    }
  },
  // 获取订单交易页信息
  async getOrderInfo({ commit }) {
    const result = await reqOrderInfo();
    if (result.code === 200) {
      commit('GETORDERINFO', result.data);
    }
  },
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