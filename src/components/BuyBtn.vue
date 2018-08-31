<template>
    <button @click="buy">
        <slot>Buy</slot>
    </button>
</template>
<script>
import cart from '../store/cart';
export default {
    props: {
        id: {
            type: [Number, String],
            default: 0
        },
        redirect: false,
    },
    methods: {
        buy() {
            /* 
                cart.add(this.id);
                if (this.redirect) {
                    this.$router.push(this.redirect)
                } 
            */
           this.$store.dispatch('addProduct', this.id);
        }
    }
}
</script>

