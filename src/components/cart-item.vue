<template>
  <div class="flex items-center justify-between w-full mb-1">
    <div class="w-[60%] sm:h-24 md:h-28 lg:h-40 xl:h-36 2xl:h-40 flex">
      <div
        class="w-1/2 min-h-[100%] flex justify-center"
        :style="{
          border: product.selected_color
            ? '3px solid ' + product.selected_color
            : '3px solid gray',
        }"
      >
        <img
          class="sm:w-36 xl:w-1/2 2xl:w-1/2"
          :src="'../src/assets/' + product.image"
          alt="IMG"
          srcset=""
        />
      </div>
      <div class="ml-4 w-1/2 flex flex-col justify-center">
        <p class="font-bold">{{ product.title }}</p>
        <p v-if="product.selected_color">цвет {{ product.selected_color }}</p>
      </div>
    </div>
    <div class="w-60 sm:hidden md:hidden lg:block">
      {{ product.regular_price.value }} *
      {{ cartStore.products.filter((el) => el?.id === product?.id).length }} =
      {{
        (
          product.regular_price.value *
          cartStore.products.filter((el) => el?.id === product?.id).length
        ).toFixed(2)
      }}
      {{ product.regular_price.currency }}
    </div>
    <div class="w-[40%] flex justify-end items-center">
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
