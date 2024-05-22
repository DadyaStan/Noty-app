<script setup>
import { useAuthStore } from "@/stores/auth.js";
import UserDataBox from "@/components/UserDataBox.vue";

const userData = useAuthStore().getUserData;
console.log()
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <div class="logo-box">
        <h1>noty</h1>
      </div>
      <UserDataBox />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  margin-bottom: 35px;
  border-bottom: 1px solid var(--color-border-line);

  &__inner {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
      font-size: 28px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>