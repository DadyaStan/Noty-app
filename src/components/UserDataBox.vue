<script setup>
import {useRouter} from 'vue-router';
import {useAuthStore} from '@/stores/auth';

const authStore = useAuthStore();
const router = useRouter();

let userData = JSON.parse(localStorage.getItem('userData'));

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<template>
  <div class="user-box">
    <div class="user-box__img-box">
      <img :src="userData.image" alt="">
    </div>
    <div class="user-box__info">
      <div class="user-box__name">{{ userData.firstName + ' ' + userData.lastName }}</div>
      <div class="user-box__email">{{ userData.email }}</div>
    </div>
    <div @click="handleLogout" class="user-box__logout">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.5 25.5H12.1667C11.7246 25.5 11.3007 25.3244 10.9882 25.0118C10.6756 24.6993 10.5 24.2754 10.5 23.8333V12.1667C10.5 11.7246 10.6756 11.3007 10.9882 10.9882C11.3007 10.6756 11.7246 10.5 12.1667 10.5H15.5M21.3333 22.1667L25.5 18M25.5 18L21.3333 13.8333M25.5 18H15.5"
            stroke="#FCFCFC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-box {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__img-box {
    margin-right: 20px;
    & img {
      width: 42px;
      height: 42px;
    }
  }

  &__name {
    font-weight: 500;
  }

  &__email {
    font-weight: 200;
  }

  &__logout {
    height: 62px;
    position: relative;

    & svg {
      position: absolute;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>