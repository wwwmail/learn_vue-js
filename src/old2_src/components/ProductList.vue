<template>
    <div>
        <ul>
            <li v-for="(product, index) in products" :key="index">
                <span>{{index}} - <router-link :to="index | productLink">{{ product.title }}</router-link> - {{ product.price }}</span>
                <buy-btn :id="index" redirect="/cart"></buy-btn>
            </li>
        </ul>
    </div>
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
    },
    filters: {
        productLink(val) {
            return '/product/' + val;
        }
    }
}
</script>

