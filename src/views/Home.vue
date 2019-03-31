<template>
  <div>
    <h1>Behold Our Mighty Products!</h1>
    <ProductGrid />
  </div>
</template>

<script>
import ProductGrid from '@/components/ProductGrid.vue'

export default {
  name: 'Home',
  components: {
    ProductGrid,
  },
}
</script>
