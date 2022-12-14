import { createStore } from 'vuex'
import auth from './module/auth'
import company from './module/Company/company'
import base from './module/Base/base'
import category from './module/Category/category'
import detail_type from './module/DetailType/detailType'
import domain from './module/Domain/domain'
import imCalculationDetail from './module/IMCalculationDetail/imCalculationDetail'
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
    base,
    category,
    detail_type,
    domain,
    imCalculationDetail
  }
})
