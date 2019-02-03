<template>
  <div>
    <h1>Behold Our Mighty Products!</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList,
  },
}
</script>
