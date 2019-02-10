import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'
import createPersistedState from 'vuex-persistedstate'

import api from 'api-client'
import constants from '@/constants'

Vue.use(Vuex)

const initialProducts = [
  {
    id: uuid(),
    title: 'Shoes',
    description: 'Snazzy shoes that go on your snazzy feet!',
    price: 99.99,
  },
  {
    id: uuid(),
    title: 'Gloves',
    description: 'Fancy gloves to protect the money makers.',
    price: 29.99,
  },
  {
    id: uuid(),
    title: 'Pants',
    description: 'Fancy dancy pantses.',
    price: 49.99,
  },
]

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    [constants.PRODUCTS_DELETE](state, productId) {
      const productIndex = state.products.findIndex((p) => p.id === productId)
      state.products.splice(productIndex, 1)
    },
    [constants.PRODUCTS_INIT](state) {
      state.products = initialProducts
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
    async [constants.PRODUCTS_FETCH](store) {
      const products = await api.getProducts()
      store.commit(constants.PRODUCTS_SET, products)
      return products
    },
  },
  plugins: [
    createPersistedState({
      key: 'vueshop',
      paths: ['products'],
    }),
  ],
})
