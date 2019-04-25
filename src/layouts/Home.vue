<template>
  <div>
    <main-header></main-header>
      <router-view />
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
  },
  data () {
    return {
      title: 'Some title' // we define the "title" prop
    }
  },
  // NOTICE meta is a function here, which is the way
  // for you to reference properties from the Vue component's scope
// ...

  meta: {
    meta: {
      myKey: { name: 'description', content: 'My Website' }
    }
  },
  methods: {
    setAnotherTitle () {
      this.title = 'Another title' // will automatically trigger a Meta update due to the binding
    }
  }
}
</script>
<style lang="scss" scoped>
#router-view {
  min-height: calc(100vh - 361px);
  background: #eceff1;
}
</style>
