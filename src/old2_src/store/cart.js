import Vue from 'vue';
import products from './products';
export default new Vue({
    data() {
        return {
            products: {}
        }
    },
    created() {
        this.products = JSON.parse(localStorage.getItem('cart.products') || '{}')
    },
    methods: {
        add(id) {
            if (void 0 === this.products[id]) {
                this.$set(this.products, id, {
                    count: 0
                })
            }

            this.products[id].count++;
        },
        remove(id) {
            this.$delete(this.products, id)
        }
    },
    computed: {
        totalItems() {
            return Object.values(this.products).reduce((total, product) => {
                return total + +product.count
            }, 0)
        },
        total() {
            return Object.keys(this.products).reduce((total, id) => {
                return total + (products.list[id].price * this.products[id].count)
            }, 0)
        },
        productsJSON() {
            return JSON.stringify(this.products || {});
        }
    },
    watch: {
        products: {
            handler() {
                localStorage.setItem('cart.products', this.productsJSON)
            },
            deep: true
        }
    }
});