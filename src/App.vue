<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Импорт хранилища

const authStore = useAuthStore();

onMounted(() => {
  // Выполнение проверки аутентификации при наличии токена
  if (localStorage.getItem('token')) {
    authStore.checkAuth();
  }
});
</script>

<template>
  <RouterView />
</template>
