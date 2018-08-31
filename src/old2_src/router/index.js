import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import CartPage from '@/components/CartPage'
import ProductPage from '@/components/ProductPage'
import Page404 from '@/components/Page404'
import products from '../store/products';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage,
      props: true,
      beforeEnter: (to, from, next) => {
        let id = to.params.id;
        if (void 0 === products.list[id]) {
          next({
            path: '/404',
            replace: true
          })
        }
        return next();
      }
    },
    {
      path: '/404',
      name: '404',
      component: Page404
    },
    {
      path: '*',
      redirect: {name: '404'}
    }
  ]
})
