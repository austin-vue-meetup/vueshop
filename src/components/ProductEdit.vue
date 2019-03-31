<script>
import constants from '@/constants'

export default {
  name: 'ProductEdit',
  data() {
    return {
      product: {},
    }
  },
  created() {
    const id = this.$route.params.id
    if (id && id !== 'new') {
      this.product = this.$store.state.products.find((p) => p.id === id) || {}
    }
  },
  methods: {
    cancel() {
      this.$router.push('/admin/product')
    },
    async save() {
      await this.$store.dispatch(constants.PRODUCTS_SAVE, this.product)
      this.$router.push('/admin/product')
    },
  },
}
</script>

<template>
  <form @submit.prevent="save" @reset="cancel">
    <div class="form-group">
      <label for="title">Title</label>
      <input v-model="product.title" class="form-control" type="text" name="title" />
    </div>

    <div class="form-group">
      <label for="price">Price</label>
      <input
        v-model="product.price"
        class="form-control"
        type="number"
        name="price"
        pattern="\d*"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <input v-model="product.description" class="form-control" type="text" name="description" />
    </div>

    <button class="btn btn-primary mr-3" type="submit">Save</button>
    <button class="btn btn-outline-secondary" type="reset">Cancel</button>
  </form>
</template>
