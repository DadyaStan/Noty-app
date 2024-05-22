import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    userData: null,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuth: (state) => !!state.token,
    getUserData: (state) => state.userData,
  },
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: credentials.username,
          password: credentials.password,
        });
        this.userData = response.data;
        this.token = response.data.token;

        localStorage.setItem('token', this.token);
        localStorage.setItem('userData', JSON.stringify(this.userData));
        localStorage.setItem('userId', this.userData.id);

        console.log(JSON.parse(localStorage.getItem('userData')))
        console.log(localStorage.getItem('userId'))

        console.log('Login successfull');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    logout() {
      console.log('Logout');
      this.userData = null;
      this.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    },
    async checkAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          this.userData = response.data;
        } catch (error) {
          console.error('Check auth failed:', error);
          this.logout();
        }
      }
    }
  }
});