<template>
  <div class="product-detail-warp">
    <div class="container">
      {{productDetail}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'productDetail',
  data: () => ({
    title: 'quasar-ssr测试'
  }),
  meta () {
    return {
      // this accesses the "title" property in your Vue "data";
      // whenever "title" prop changes, your meta will automatically update
      title: this.title,
      meta: {
        a : { name: 'description', content: this.productDetail.title }
      }
    }
  },
  name: 'Product',
  // our hook here
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
    return store.dispatch('product/getProductDetail', currentRoute.params.id || '5433d5e4e737cbe96dcef312')
  },
  computed: {
    productDetail () {
      return this.$store.state.product.productDetail || {}
    }
  }
}
</script>
