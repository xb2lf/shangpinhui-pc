// search模块的仓库
import { reqSearchInfo } from "@/api";

// state：仓库存储数据的地方
const state = {
  searchList: {},
};
//mutations:修改state的唯一手段
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
};
//actions:处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  //获取search模块数据
  async getSearchList({ commit }, params = {}) {
    const result = await reqSearchInfo(params);
    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data);
    }
  }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更方便
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  }
};

export default {
  /* namespaced: true, */
  state,
  mutations,
  actions,
  getters,
}
