<template>
  <div>
    <div class="w-full h-full">
      <Menu />

      <div
        class="pb-32 sm:pt-24 md:pt-28 lg:pt-32 2xl:pt-40 px-5 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-gray-100 w-full h-full overflow-scroll md:px-40"
      >
        <Product
          v-for="product in products.$state.filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductsStore } from "@/stores/products";
import { useAppState } from "@/stores/app-state";
import type { IProduct } from "@/types/types";
import { storeToRefs } from "pinia";
import Menu from "./menu.vue";
import Product from "./product.vue";
const products = useProductsStore();
console.log(products.$state.products.length);
</script>
<style lang=""></style>
