<template>
  <div>
    <h1>Hello Vue!</h1>
    <product-list></product-list>
  </div>
</template>


<script>
import ProductList from './ProductList';
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{ProductList}
}
</script>
