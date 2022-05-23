<template>
  <div class="flex items-center justify-between w-full mb-1">
    <div class="w-[55%] h-16 flex">
      <div
        class="w-1/2 min-h-[100%]"
        :style="{
          border: product.selected_color
            ? '3px solid ' + product.selected_color
            : '3px solid gray',
        }"
      >
        <img :src="product.image" alt="IMG" srcset="" />
      </div>
      <div class="ml-4 w-full">
        <p class="">{{ product.title }}</p>
        <p v-if="product.selected_color">цвет {{ product.selected_color }}</p>
      </div>
    </div>
    <div class="w-[45%] flex justify-end items-center">
      <Button
        class="mr-1 border rounded-2xl w-8 bg-green-500 text-white"
        @click="cartStore.addToCart(product)"
        >+</Button
      >
      {{ cartStore.products.filter((el) => el?.id === product?.id).length }}
      <Button
        class="ml-1 border rounded-2xl w-8 bg-red-500 text-white"
        @click="cartStore.removeFromCart(product)"
      >
        -
      </Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCartStore } from "@/stores/cart";
import type { IProduct } from "@/types/types";
const cartStore = useCartStore();
defineProps<{ product: IProduct }>();
</script>
<style scoped></style>
