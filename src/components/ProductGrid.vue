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
}
</script>

<template>
  <div class="card-deck mt-5">
    <div v-for="product in products" :key="product.id" :class="['card', $style.cardWidth]">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ product.price }}</h6>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div :class="['card-footer bg-primary text-white text-center', $style.cardFooter]">
        Buy me!
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@media (min-width: 768px) {
  .cardWidth {
    max-width: 33%;
  }
}

@media (min-width: 1500px) {
  .cardWidth {
    max-width: 25%;
  }
}

.cardFooter {
  cursor: pointer;
}
</style>
