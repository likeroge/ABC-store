<template>
  <div class="fixed h-1/6 w-screen">
    <div class="flex items-center bg-white justify-between px-5 h-2/6">
      <div class="text-2xl tracking-widest">
        <div class="flex flex-col justify-between h-full">
          <div><span class="text-green-500">A</span>BC</div>
        </div>
      </div>

      <div class="sm:hidden md:flex justify-center items-center">
        <span class="text-xl">
          {{ cart.products.length }}
        </span>

        <fa
          v-if="cart.products.length === 0"
          icon="cart-shopping"
          class="h-6 text-gray-500 cursor-pointer"
          @click="$router.push('/cart')"
        />
        <fa
          v-else
          icon="cart-plus"
          class="h-6 text-green-500 cursor-pointer"
          @click="$router.push('/cart')"
        />
      </div>
    </div>

    <div class="flex justify-around h-3/6 bg-white">
      <div
        class="mx-5 h-full w-[5%] md:flex items-center sm:hidden cursor-pointer"
      >
        <fa
          v-if="$route.path === '/'"
          @click="appState.setMenuVisible()"
          icon="bars"
          class="h-3/6 w-full text-gray-500"
        />
        <fa
          v-else
          @click="$router.go(-1)"
          icon="chevron-left"
          class="h-3/6 w-full text-gray-500"
        />
      </div>
      <div class="w-full flex justify-center items-center">
        <p class="text-green-500 uppercase sm:text-sm md:text-xl">
          Лучшие товары на диком западе
        </p>
        <!-- <input
          v-if="$route.path === '/'"
          placeholder="Введите название товара"
          type="text"
          name=""
          id=""
          class="sm:w-full md:w-1/2 rounded p-5 border-2"
        /> -->
        <!-- <div v-else class="w-full sm:bg-slate-300"></div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAppState } from "@/stores/app-state";
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";

const products = useProductsStore();
const cart = useCartStore();
const appState = useAppState();
</script>
<style lang=""></style>
