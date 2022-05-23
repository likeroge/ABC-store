<template>
  <div class="h-60 bg-white shadow-2xl rounded">
    <img
      :src="product.image"
      alt="IMG"
      :style="{
        border: product.selected_color
          ? '3px solid ' + product.selected_color
          : '3px solid gray',
        height: '50%',
      }"
    />
    <div class="h-[10%] mt-1">
      <div v-if="props.product.colors" class="flex justify-around text-sm">
        <!-- props.product.colors -->
        <div
          v-for="(color, idx) in ['blue', 'green', 'red']"
          class="w-full flex justify-center"
        >
          <div
            :value="props.product.colors![idx]"
            :style="{background:props.product.colors![idx] !== '' ? props.product.colors![idx] :'gray'}"
            class="w-3/6 rounded-full flex justify-center py-1"
          >
            <input
              :disabled="props.product.colors![idx] === ''"
              @change="onRadioChange($event, product)"
              type="radio"
              :value="props.product.colors![idx]"
              :name="props.product.id.toString()"
              id=""
              class="bg-blue-800 text-red-500 border-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 flex flex-col items-center">
      <p class="descriprion">{{ props.product.title }}</p>
      <p>Brand {{ props.product.brand }}</p>
      <p>
        {{ props.product.regular_price.value }}
        {{ props.product.regular_price.currency }}
      </p>
    </div>
    <div class="px-2 flex justify-center">
      <button
        @click="store.addToCart(product)"
        class="h-full bg-green-500 px-4 rounded active:bg-green-800"
        :style="
          product.colors &&
          !product.selected_color && {
            pointerEvents: 'none',
            background: 'gray',
          }
        "
      >
        добавить
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";
import type { IProduct } from "../types/types";
const props = defineProps<{ product: IProduct; key: number }>();
const store = useCartStore();
const productsStore = useProductsStore();

const currentSelectedProduct = { color: "", id: 0 };

function onRadioChange(event: Event, product: IProduct) {
  const target = <HTMLInputElement>event.target;
  currentSelectedProduct.color = target.value;
  productsStore.setProductSelectedColor(product, target.value);
  console.log(product);
}
</script>
<style scoped>
p {
  font-size: smaller;
}
</style>
