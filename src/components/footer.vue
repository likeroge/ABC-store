<template>
  <div class="h-[10%] bg-white w-full fixed rounded">
    <div class="h-full flex justify-between items-center px-5">
      <fa
        v-if="$route.path === '/'"
        @click="appState.setMenuVisible()"
        icon="bars"
        class="h-3/6 text-gray-500"
      />

      <fa
        v-else
        @click="$router.go(-1)"
        icon="chevron-left"
        class="h-3/6 text-gray-500"
      />

      <div class="h-3/6">
        <fa
          v-if="cart.products.length === 0"
          icon="cart-shopping"
          class="h-full text-gray-500"
          @click="$router.push('/cart')"
        />
        <div v-else class="flex h-full">
          <p class="text-xl">{{ cart.products.length }}</p>
          <fa
            icon="cart-plus"
            class="h-full text-green-500"
            @click="$router.push('/cart')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import { useAppState } from "@/stores/app-state";
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();
const appState = useAppState();
</script>
<style lang=""></style>
