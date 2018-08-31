<template>
    <div>
        <h1>{{ title }}</h1>
        <img :src="img" alt="">
        <br/>
        <buy-btn :id="id" :disabled="!valid">Add to Cart</buy-btn>
    </div>
</template>
<script>
import products from '../store/products';
import BuyBtn from './BuyBtn';
export default {
    components: {
        BuyBtn
    },
    props: ['id'],
    computed: {
        product() {
            return products.list[this.id]
        },
        valid() {
            return void 0 !== this.product
        },
        title() {
            return this.product.title
        },
        img(){
            return this.product.img
        },
        price() {
            return this.product.price
        }
    }

}
</script>
