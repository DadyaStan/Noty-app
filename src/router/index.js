import {createRouter, createWebHistory} from 'vue-router';

import {useAuthStore} from '@/stores/auth';

import NotesListView from '../views/NotesListView.vue';
import UsersList from "@/views/UsersList.vue";
import AuthView from '../views/AuthView.vue';

const authGuard = (to, from, next) => {
  const authStore = useAuthStore();
  console.log(authStore.isAuth)
  console.log(authStore.getUserData)
  console.log(localStorage.getItem("userId"))
  if (authStore.isAuth && to.path === '/login') {
    next('/');
  } else if (!authStore.isAuth && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'notes-list',
    component: NotesListView,
    beforeEnter: authGuard,
  },
  {
    path: '/users-list',
    name: 'users-list',
    component: UsersList,
    beforeEnter: authGuard,
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView,
    beforeEnter: authGuard,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
