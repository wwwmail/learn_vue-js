<template>
    <div v-if="valid">
        {{ title }}
        <input type="number" min="1" v-model="count"/>
        x {{ price }}
        = {{ total }}
        <button @click="remove">X</button>
    </div>
</template>
<script>
import products from '../store/products';
export default {
    props: ['id', 'value'],
    computed: {
        product() {
            return products.list[this.id];
        },
        title() {
            return this.product.title
        },
        price() {
            return this.product.price
        },
        total() {
            return this.count * this.price
        },
        valid() {
            return (void 0 !== this.product);
        },
        count: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    methods: {
        remove() {
            this.$emit('remove', this.id);
        }
    }
}
</script>
