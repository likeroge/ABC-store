import type { IProduct } from "@/types/types";
import { defineStore } from "pinia";
import { mockProducts } from "./mock/mockProducts";

const mockData: IProduct[] = mockProducts;

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: mockData,
    filteredProducts: mockData,
  }),
  getters: {},
  actions: {
    setFilteredProducts(brand: number | "all") {
      if (brand === "all") {
        this.filteredProducts = this.products;
        return;
      }
      this.filteredProducts = this.products.filter(
        (product) => product.brand === brand
      );
    },
    setProductSelectedColor(product: IProduct, color: string) {
      this.filteredProducts.filter(
        (el) => el.id === product.id
      )[0].selected_color = color;
    },
  },
});
