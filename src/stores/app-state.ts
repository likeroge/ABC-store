import type { IProduct } from "@/types/types";
import { defineStore } from "pinia";

export const useAppState = defineStore({
  id: "appState",
  state: () => ({
    menu: { visible: false },
    modal: { visible: false },
  }),
  getters: {},
  actions: {
    setMenuVisible() {
      this.menu.visible = !this.menu.visible;
    },
    setModalVisible(visible: boolean) {
      this.modal.visible = visible;
    },
  },
});
