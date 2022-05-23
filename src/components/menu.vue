<template>
  <div
    class="flex h-full w-full fixed transition-all duration-300"
    @click.prevent="appState.setMenuVisible()"
    :class="appState.$state.menu.visible === false ? 'left-[-100%]' : 'left-0'"
  >
    <div
      class="md:w-2/6 sm:w-full bg-gray-100 flex flex-col items-center h-full"
    >
      <h1 class="mt-4 text-2xl">Категории</h1>
      <div class="max-h-[80%] w-full flex flex-col items-center">
        <div
          v-for="brand in mockBrands"
          :key="brand.id"
          class="mt-4 w-1/3 border-b-2 border-b-green-500 text-center cursor-pointer"
          @click="products.setFilteredProducts(brand.id)"
        >
          <p class="">{{ brand.title }}</p>
        </div>
        <div class="mt-4 w-full">
          <button
            @click="products.setFilteredProducts('all')"
            class="bg-green-500 w-full h-10 rounded text-white active:bg-green-700"
          >
            сброс
          </button>
        </div>
      </div>
    </div>
    <div class="md:w-4/6 md:block sm:hidden bg-gray-600 opacity-50"></div>
  </div>
</template>
<script lang="ts" setup>
import { useAppState } from "@/stores/app-state";
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";
import { mockBrands } from "../stores/mock/mockBrands";

const appState = useAppState();
const products = useProductsStore();
</script>
<style scoped></style>
