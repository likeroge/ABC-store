<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from "./stores/cart";
import { useProductsStore } from "./stores/products";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import ProductsList from "./components/products-list.vue";
</script>

<template>
  <div class="h-screen">
    <div class="h-full">
      <Header />

      <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
      <!-- <ProductsList /> -->
      <RouterView class="h-[90%] w-full md:h-full" />
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
