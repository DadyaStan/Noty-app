<script setup>
import { ref } from 'vue';
import NoteModal from "@/components/Modals/NoteModal.vue";

const noteModalParams = {
  title: "Новая заметка",
  action: "addNote"
}

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="section-header container">
    <h2 class="section-heading__title">Ваши заметки</h2>
    <div class="section-header__btn-box">
      <button @click="toggleMenu" class="long-btn">Новая заметка</button>
    </div>
    <NoteModal v-if="isOpen" :data="noteModalParams" @close="closeMenu" />
  </div>
</template>

<style scoped lang="scss">
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
</style>