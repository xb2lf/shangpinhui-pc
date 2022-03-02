// home模块的仓库
import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";
// state：仓库存储数据的地方
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
//mutations:修改state的唯一手段
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  }
};
//actions:处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("GETCATEGORYLIST", result.data)
    }
  },
  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data);
    }
  },
  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit('GETFLOORLIST', result.data);
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
