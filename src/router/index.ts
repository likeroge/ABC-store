import { createRouter, createWebHistory } from "vue-router";
// import ProductList from "../components/products-list.vue";
import ProductsList from "../components/products-list.vue";
import Cart from "../components/cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductsList,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
