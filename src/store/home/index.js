import { reqCategoryList } from "@/api";
// home模块的仓库

// state：仓库存储数据的地方
const state = {
  categoryList: [],
};
//mutations:修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
};
//actions:处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async categoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("CATEGORYLIST", result.data)
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
