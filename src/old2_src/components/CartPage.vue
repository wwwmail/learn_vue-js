<template>
    <div>
        <h1>Cart Page</h1>
        <cart-item 
            v-for="(item, index) in list" 
            :key="index" 
            :id="index" 
            v-model="item.count"
            @remove="remove" ></cart-item>
        <div>Total: {{ cartTotal }} $</div>
    </div>
</template>
<script>
import cart from '../store/cart';
import products from '../store/products';
import CartItem from './CartItem';
export default {
    components: {
        CartItem
    },
    computed: {
        list() {
            return cart.products;
        },
        cartTotal() {
            return cart.total;
        }
    },
    methods: {
        remove(id) {
            if (confirm('Are You serious ?')) {
                cart.remove(id)
            }
        }
    }
}
</script>
