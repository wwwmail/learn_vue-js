<template>
  <div id="app">
    <div>
      <p>runPath: {{ runPath }}</p>
      <p>currentPath: {{ currentPath }}</p>
      <p>fromPath: {{ fromPath }}</p>
      <p>params: {{ params }}</p>
    </div>
    <NavigationBar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar';
export default {
  name: 'App',
  data() {
    return {
      currentPath: '',
      fromPath: '',
      params: {}
    }
  },
  created() {
    this.currentPath = this.runPath;
  },
  components: {
    NavigationBar
  },
  computed: {
    runPath() {
      return this.$router.currentRoute.path
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPath = to.path;
      this.fromPath = from.path;
      this.params = to.params;
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
