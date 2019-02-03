import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'
import createPersistedState from 'vuex-persistedstate'

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
    [constants.INIT_PRODUCTS] (state) {
      state.products = initialProducts
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      key: 'vueshop',
      paths: ['products'],
    }),
  ],
})
