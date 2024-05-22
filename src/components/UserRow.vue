<script setup>

</script>

<template>
<ul class="user">
  <li class="user__info">Danila Smirnov</li>
  <li class="user__info">5 заметок</li>
  <li class="user__info">Админ</li>
  <li class="user__info">Админ</li>
  <li class="user__info">-</li>
  <li class="user__info">+</li>
</ul>
</template>

<style scoped lang="scss">
.user {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
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

  &:last-child {
    border-radius: 0 0 15px 15px;
  }
}
</style>