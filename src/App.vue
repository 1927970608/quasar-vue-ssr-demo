<template>
  <div id="q-app">
    <main-header></main-header>
    <div id="router-view">
      <router-view />
    </div>
  </div>
</template>
<script>
import { Header } from 'components/main'
export default {
  name: 'Mall',
  components: {
    MainHeader: Header
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
#router-view {
  min-height: calc(100vh - 361px);
  background: #eceff1;
}
</style>
