<template>
    <ul>
        <li v-for="(product, index) in products" :key="index">
            <span>{{index}} - {{ product.title }} - {{ product.price }}</span>
            <buy-btn :id="index"></buy-btn>
        </li>
    </ul>
</template>
<script>
import products from '../store/products';
import BuyBtn from './BuyBtn';
export default {
    computed: {
        products() {
            return products.list;
        }
    },
    components: {
        BuyBtn
    }
}
</script>
