import { defineStore } from 'pinia'

export const useMobileStore = defineStore('mobile', {
  state: () => ({
    isMenuOpen: false,
  }),
  actions: {
    openMenu() {
      this.isMenuOpen = true
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
})
