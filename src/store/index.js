import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addGoodCount(state, payload) {
      payload.count++;
    },
    addNewGood(state, payload) {
      payload.isSelected = false;
      state.cartList.push(payload);
    }
  },
  actions: {
    addToCart(context, payload) {
      return new Promise((resolve) => {
        const existed = context.state.cartList.find(item => item.iid === payload.iid);
        if (existed) {
          context.commit("addGoodCount", existed);
          resolve("当前商品数量+1！");
        } else {
          payload.count = 1;
          context.commit("addNewGood", payload);
          resolve("成功加入购物车！");
        }
      })
    }
  },
  getters: {
    cartGoodsLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList;
    }
  }
})

export default store;