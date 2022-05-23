<template>
  <Modal />

  <div
    class="sm:pt-[30%] sm:px-4 md:pt-[20%] lg:pt-[10%] md:px-48 h-[90%] bg-gray-100"
  >
    <div class="flex justify-between items-center mb-2">
      <h1 class="text-xl">Корзина</h1>
      <p>{{ cartStore.products.length }} {{ correctItemsWordInRus }}</p>
    </div>
    <hr />

    <p v-if="cartStore.products.length === 0">Ваша корзина пуста</p>
    <div v-else class="max-h-[70%] mt-4">
      <div class="max-h-48 overflow-scroll">
        <CartItem
          v-for="product in Array.from(new Set(cartStore.products.map((el) => el.id)))
  .map((idx) =>
    cartStore.products.find((filtered_product) => filtered_product.id === idx)
  )
  .flat()
  .sort((a, b) => a?.id! - b?.id!)"
          :product="product!"
        />
      </div>
      <hr class="mt-4" />
      <p>
        Итого: {{ cartStore.totalPrice.toFixed(2) }}
        {{ cartStore.products[0].regular_price.currency }}
      </p>
      <div class="flex sm:flex-col md:flex-row mt-4 justify-around">
        <button
          @click="appStore.setModalVisible(true)"
          class="h-10 sm:w-full md:w-[40%] bg-green-500 mb-4 rounded"
        >
          Оформить заказ
        </button>
        <button
          @click="cartStore.removeAllItemsFromCart"
          class="h-10 sm:w-full md:w-[40%] bg-red-500 rounded"
        >
          Отчистить корзину
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppState } from "@/stores/app-state";
import { useCartStore } from "../stores/cart";
import { StringHelper } from "../utils/StringHelper";
import CartItem from "./cart-item.vue";
import Modal from "./modal.vue";
const cartStore = useCartStore();
const appStore = useAppState();

const correctItemsWordInRus = StringHelper.getCartItemsSuffix(
  cartStore.products.length
);

const itemsSet = Array.from(new Set(cartStore.products.map((el) => el.id)))
  .map((idx) =>
    cartStore.products.find((filtered_product) => filtered_product.id === idx)
  )
  .flat()
  .sort((a, b) => a?.id! - b?.id!);

console.log(itemsSet);
</script>
<style scoped></style>
