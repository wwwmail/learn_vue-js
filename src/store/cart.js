import Vue from 'vue';

export default new Vue({
    data() {
        return {
            products: {}
        }
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
            return 100;
        }
    }
});