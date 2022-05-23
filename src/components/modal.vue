<template>
  <div
    :style="{ display: appStore.modal.visible === false ? 'none' : 'flex' }"
    class="h-screen w-screen bg-black bg-opacity-60 absolute flex flex-col justify-center items-center"
  >
    <div
      class="h-1/6 sm:w-4/6 md:w-2/6 bg-white rounded flex flex-col items-center"
    >
      <h1 class="text-xl text-center mb-4 mt-2">Спасибо за заказ!</h1>
      <button
        @click="onOkHandler"
        class="bg-green-500 text-white w-3/6 h-2/6 rounded active:bg-green-700"
      >
        OK
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
import { useAppState } from "@/stores/app-state";
import { useCartStore } from "@/stores/cart";

const appStore = useAppState();
const cartStore = useCartStore();

function onOkHandler() {
  cartStore.removeAllItemsFromCart();
  appStore.setModalVisible(false);
  router.push("/");
}
</script>
<style scoped></style>
