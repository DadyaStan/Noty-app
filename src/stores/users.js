import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [
      {
        id: 1,
        firstName: "Danila",
        sureName: "Smirnov",
        notesCount: 5,
        notesList: [],
        status: "activated",
        role: "admin"
      },
      {
        id: 2,
        firstName: "Denis",
        sureName: "Lebedev",
        notesCount: 6,
        notesList: [],
        status: "activated",
        role: "user"
      }
    ]
  }),
  actions: {
    createUser(newUser) {
      // Логика создания нового пользователя
    },
    changeUserRole(userId, newRole) {
      // Логика изменения роли пользователя
    },
    deleteUser(userId) {
      // Логика удаления пользователя
    },
  },
  getters: {
    getAllUsers() {
      return this.users;
    },
    getAdminUsers() {
      return this.users.filter(user => user.role === 'admin');
    },
  },
});
