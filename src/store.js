import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'
import createPersistedState from 'vuex-persistedstate'

import api from 'api-client'
import constants from '@/constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    [constants.PRODUCTS_DELETE](state, productId) {
      const productIndex = state.products.findIndex((p) => p.id === productId)
      state.products.splice(productIndex, 1)
    },
    [constants.PRODUCTS_SAVE](state, product) {
      if (product.id) {
        const productIndex = state.products.findIndex((p) => p.id === product.id)
        state.products.splice(productIndex, 1, product)
      } else {
        product.id = uuid()
        state.products.push(product)
      }
    },
    [constants.PRODUCTS_SET](state, products) {
      state.products = products
    },
  },
  actions: {
    async [constants.PRODUCTS_DELETE](store, id) {
      const deletedProduct = await api.deleteProduct(id)
      store.commit(constants.PRODUCTS_DELETE, deletedProduct)
      return deletedProduct
    },
    async [constants.PRODUCTS_FETCH](store) {
      const products = await api.getProducts()
      store.commit(constants.PRODUCTS_SET, products)
      return products
    },
    async [constants.PRODUCTS_SAVE](store, product) {
      const savedProduct = await api.saveProduct(product)
      store.commit(constants.PRODUCTS_SAVE, savedProduct)
      return savedProduct
    },
  },
  plugins: [
    createPersistedState({
      key: 'vueshop',
      paths: ['products'],
    }),
  ],
})
