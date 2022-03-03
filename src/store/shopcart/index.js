// shopcart模块的仓库
import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

// state：仓库存储数据的地方
const state = {
  cartList: [],
};
//mutations:修改state的唯一手段
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
};
//actions:处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 获取购物车列表
  async getCartList({ commit }) {
    const result = await reqCartList();
    if (result.code === 200) {
      commit('GETCARTLIST', result.data);
    }
  },
  // 删除购物车商品
  async deleteCartListById({ commit }, skuId) {
    const result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 修改购物车商品选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    const result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 删除购物车全部选中的商品
  deleteAllCheckedCart(context) {
    /* 
     * context: 仓库映射对象 
     * 包括：
     *     commit 提交mutations修改state
     *     getters 计算属性
     *     dispatch 派发actions
     *     state  当前仓库数据
     */
    const { dispatch, getters } = context;
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked === 1 ? dispatch('deleteCartListById', item.skuId) : '';
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll)
  },

  // 修改全部产品的状态
  updateAllCartsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更方便
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },
};

export default {
  /* namespaced: true, */
  state,
  mutations,
  actions,
  getters,
}
