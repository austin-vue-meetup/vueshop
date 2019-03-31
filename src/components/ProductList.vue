<script>
import constants from '@/constants'

export default {
  name: 'ProductGrid',
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  created() {
    this.$store.dispatch(constants.PRODUCTS_FETCH)
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch(constants.PRODUCTS_DELETE, id)
    },
    isOdd(value) {
      return value % 2 !== 0
    },
  },
}
</script>

<template>
  <div>
    <RouterLink to="/admin/product/new" tag="button" class="btn btn-primary mb-3">
      Add Product
    </RouterLink>
    <div
      v-for="(product, $index) in products"
      :key="product.id"
      :class="['row mb-3 p-2 d-flex align-items-center', { 'bg-light': isOdd($index) }]"
    >
      <div class="col">
        <RouterLink :to="'/admin/product/' + product.id">{{ product.title }}</RouterLink> -
        {{ '$' + product.price }}
      </div>
      <div :class="['col-2 text-right']">
        <button class="btn btn-sm btn-outline-danger" @click="deleteProduct(product.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
