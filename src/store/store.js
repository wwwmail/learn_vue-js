import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        cart: {},
        n: 1
    },
    getters: {
        getN: state => () => state.n,
        cartJson(state) {
            return JSON.stringify(state.cart || {});
        },
        cart(state) {
            return state.cart;
        },
        totalItems(state) {
            return Object.values(state.cart).reduce((total, product) => {
                return total + +product.count
            }, 0)
        },
        total(state) {
            return Object.keys(state.cart).reduce((total, id) => {
                return total + (products.list[id].price * state.cart[id].count)
            }, 0)
        },
        inCart(state) {
            return (id) => void 0 !== state.cart[id]
        }
    },
    mutations: {
        updateCount(state, {id, count}) {
            if (void 0 !== state.cart[id]) {
                //Vue.set(stae.cart[id], 'count', count);
                state.cart[id].count = count;
            }
        },
        initProduct(state, id) {
            Vue.set(state.cart, id, {count: 1});
        },
        incrimetCount(state, id) {
            //Vue.set(state.cart[id], 'count', state.cart[id].count + 1);
            state.cart[id].count++
        }
    },
    actions: {
        saveCart(context) {
            localStorage.setItem('cart.products', context.getters.cartJson);
        },
        loadCart({state}) {
            Vue.set(state, 'cart', JSON.parse(localStorage.getItem('cart.products') || '{}'))
        },
        // context, payload
        addProduct({commit, dispatch, state, getters}, id) {
            if (getters.inCart(id)) {
                commit('incrimetCount', id);
            } else {
                commit('initProduct', id)   
            }
            dispatch('saveCart');
        },
        incrimetCount(context, id) {
            context.commit('incrimetCount', id);
            context.dispatch('saveCart');
        },
        updateCount(context, payload) {
            context.commit('updateCount', payload);
            context.dispatch('saveCart');
        },
    }

})
store.dispatch('loadCart');
store.watch(state => state.cart, (cart) => {
    store.dispatch('saveCart')
}, {deep: true})

export default store;