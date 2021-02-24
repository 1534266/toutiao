import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)
const TOKEN_KEY = 'TOUTIAO_USER'
export default new Vuex.Store({
  state: {
    // 储存当前登录信息
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    // 封装后可以简写
    user: getItem(TOKEN_KEY)
    // user: null
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      // 防止刷新丢失,备份数据
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
