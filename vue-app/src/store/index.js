import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"电影",
    color:'green'
  },
  mutations: {
    change(state,obj){
      state.name=obj.name,
      state.color=obj.color
    }
  },
  actions: {
  },
  modules: {
  }
})
