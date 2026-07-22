import { defineStore } from "pinia"

export const useModalStore = defineStore("modal", {
  state: () => ({
    isShowModal: false,
  }),

  actions: {
    openModal() {
      this.isShowModal = true
    },
    closeModal() {
      this.isShowModal = false
    },
  },
})
