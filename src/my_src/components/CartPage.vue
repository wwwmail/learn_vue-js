<template>
<div>
  <h1>Cart Page</h1>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{index}} - {{item.count}}</li>
  </ul>
</div>
</template>


<script>
import cart from '../store/cart';
import products from '../store/products';

export default {
  name: 'CartPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    list(){
      return cart.products;
    }
  }
}
</script>
