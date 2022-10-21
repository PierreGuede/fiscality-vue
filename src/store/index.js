import { createStore } from 'vuex'
import auth from './module/auth'
import company from './module/Company/company'
import base from './module/Base/base'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    company,
    base
  }
})
