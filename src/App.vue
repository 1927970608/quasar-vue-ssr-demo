<template>
  <div id="q-app">
    <main-header></main-header>
    <div>{{product}}</div> 
    <div id="router-view">
      <router-view />
     
    </div>
  </div>
</template>
<script>
import { Header } from 'components/main'
export default {
    // our hook here
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
    // fetch data, validate route and optionally redirect to some other route...

    // ssrContext is available only server-side in SSR mode

    // No access to "this" here as preFetch() is called before
    // the component gets instantiated.

    // Return a Promise if you are running an async job
    // Example:
    return store.dispatch('product/getProductDetail', currentRoute.params.id)
  },
    computed: {
    // display the item from store state.
    product () {
      return this.$store.state.product.productDetail
    }
  },
  name: 'Mall',
  components: {
    MainHeader: Header
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
#router-view {
  min-height: calc(100vh - 361px);
  background: #eceff1;
}
</style>
