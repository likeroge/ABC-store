import type { ICart, IProduct } from "@/types/types";
import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: (): ICart => ({
    products: [],
    totalPrice: 0,
  }),
  getters: {},
  actions: {
    addToCart(product: IProduct) {
      this.products.push(product);
      this.totalPrice += product.regular_price.value;
    },
    removeFromCart(product: IProduct) {
      let flatProductsState = this.products.map((el) => el.id);
      let productIndexToRemove = flatProductsState.indexOf(product.id);
      let updatedProductsList = this.products.filter(
        (el, idx) => idx !== productIndexToRemove
      );
      this.products = updatedProductsList;
      this.totalPrice -= product.regular_price.value;
    },

    removeAllItemsFromCart() {
      this.products = [];
    },
  },
});
