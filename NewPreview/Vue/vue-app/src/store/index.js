import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path:'/movie',
    color:'red',
    title:'电影'
  },
  mutations: {
    change(state,{title,color}){
     state.color=color,
     state.title=title
    }
  },
  actions: {
  },
  modules: {
  }
})
