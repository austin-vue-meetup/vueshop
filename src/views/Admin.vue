<template>
  <div>
    <h1>Admin</h1>
    <a href="#" class="btn btn-sm btn-outline-danger" @click="initProducts">Initialize Products</a>
  </div>
</template>

<script>
import constants from '@/constants'

export default {
  name: 'Admin',
  methods: {
    initProducts() {
      this.$store.commit(constants.INIT_PRODUCTS)
    },
  },
}
</script>
