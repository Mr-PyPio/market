import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    addCount(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      payload.checked = false
      state.cartList.push(payload)
    },
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = null;
        for (let item of this.state.cartList) {
          if (item.iid === payload.iid) {
            oldProduct = item;
          }
        }
        // let oldProduct = context.state.cartList.find(item => item.idd === payload.iid)
        if (oldProduct) {
          context.commit('addCount', oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          context.commit('addToCart', payload)
          resolve('加入购物车成功')
        }
      })
    }
  },
})

export default store