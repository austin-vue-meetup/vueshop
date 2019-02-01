<script>
export default {
  name: 'ProductList',
  computed: {
    products() {
      return this.$store.state.products
    },
  },
}
</script>

<template>
  <div>
    <h1>Behold Our Mighty Products!</h1>

    <div class="card-deck mt-5">
      <div v-for="product in products" :key="product.id" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ product.price }}</h6>
          <p class="card-text">{{ product.description }}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary btn-sm">Buy me!</a>
        </div>
      </div>
    </div>
  </div>
</template>
