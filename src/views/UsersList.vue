<script setup>
import AppHeader from "@/components/AppHeader.vue";
import SectionHeader from "@/components/SectionHeader.vue";

import UserRow from "@/components/UserRow.vue";


</script>

<template>
  <main class="wrapper">
    <AppHeader />
    <SectionHeader />
    <div class="users-list container">
      <ul class="users-list__titles">
        <li class="user-list__title">
          Имя и фамилия
        </li>
        <li class="user-list__title">
          Кол-во заметок
        </li>
        <li class="user-list__title">
          Статус пользователя
        </li>
        <li class="user-list__title">
          Роль
        </li>
      </ul>
      <UserRow />
      <UserRow />
    </div>
  </main>
</template>

<style scoped lang="scss">
.users-list {
  display: flex;
  flex-direction: column;

  &__titles {
    width: 100%;
    display: flex;
    padding: 12px 20px;
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid var(--dark-grey);
    background-color: var(--soft-grey);

    & li:nth-child(1) {
      width: 22%;
    }
    & li:nth-child(2) {
      width: 22%;
    }
    & li:nth-child(3) {
      width: 25%;
    }
    & li:nth-child(4) {
      width: 20%;
    }
  }
}
</style>