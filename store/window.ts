import { defineStore } from 'pinia'

export const useWindowStore = defineStore('window', {
  state: () => {
    return {
      width: 0,
      height: 0
    }
  },
  actions: {
    setWindowSize(width: number, height: number) {
      this.width = width
      this.height = height
    }
  }
})
