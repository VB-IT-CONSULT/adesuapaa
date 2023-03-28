import { defineStore } from 'pinia'
import { api } from '../boot/axios'

export const useUserStore = defineStore('user-store', {
  state: () => ({
    user: [],
    isAuthenticated: false,
    token: ''
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    async login(userId, password) {

      const response = await api.post()

    },
  },
})
