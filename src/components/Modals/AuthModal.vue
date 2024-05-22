<script setup>
import {ref} from 'vue';
import {useAuthStore} from '@/stores/auth.js';
import {useRouter} from 'vue-router';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modalType: {
    type: String,
    required: true,
  }
});

const authStore = useAuthStore();
const router = useRouter();
const credentials = ref({username: '', password: ''});

console.log(localStorage.getItem('token'));
console.log(authStore.isAuth);
console.log(authStore.getUserData);

const login = async () => {
  await authStore.login(credentials.value);
  if (authStore.isAuth) {
    console.log(authStore.isAuth)
    router.push('/Noty-app/');
  }
};

</script>

<template>
  <div class="modal">
    <div class="modal auth-modal">
      <div class="modal__logo-box">
        <img src="@/components/Modals/assets/auth-modal.svg" alt="SVG Icon" />
      </div>
      <div class="modal__text-box">
        <h4 class="auth__heading">Добро пожаловать</h4>
        <p class="auth__add-text">Введите ваш логин и пароль</p>
      </div>
      <form class="modal__form-box" @submit.prevent="login">
        <div class="modal__input-box">
          <label for="" class="modal__label">Логин</label>
          <input
              type="text"
              v-model="credentials.username"
              class="modal__input"
              placeholder="E-mail" />
        </div>
        <div class="modal__input-box">
          <label for="" class="modal__label">Пароль</label>
          <input
              type="password"
              v-model="credentials.password"
              class="modal__input"
              placeholder="password" />
        </div>
        <button class="modal__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/Modal";
</style>