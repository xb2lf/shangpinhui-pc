// detail模块的仓库
import { reqGoodsInfo, reqAddUpdateShopCart } from "@/api";
import { getUUID } from '@/utils/uuid_token';

// state：仓库存储数据的地方
const state = {
  goodsInfo: {},
  //游客的临时身份
  uuid_token: getUUID(),
};
//mutations:修改state的唯一手段
const mutations = {
  GETGOODSINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo;
  }
};
//actions:处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  //获取产品信息
  async getGoodsInfo({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      commit('GETGOODSINFO', result.data);
    }
  },
  // 将产品添加到购物车|修改某一个产品的个数
  async addUpdateShopCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddUpdateShopCart(skuId, skuNum);
    // 当前这个函数执行返回的Promise(async函数执行返回的结果一定是一个promised)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'));
    }
  }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更方便
const getters = {
  categoryView() {
    return state.goodsInfo.categoryView || {}
  },
  skuInfo() {
    return state.goodsInfo.skuInfo || {}
  },
  spuSaleAttrList() {
    return state.goodsInfo.spuSaleAttrList || []
  },
};

export default {
  /* namespaced: true, */
  state,
  mutations,
  actions,
  getters,
}