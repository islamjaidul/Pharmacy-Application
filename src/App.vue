<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import {mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    navigation: Navigation
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  created() {
    const userObj = JSON.parse(window.localStorage.getItem('authUser'))
    this.$store.dispatch('setUserObject', userObj)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
