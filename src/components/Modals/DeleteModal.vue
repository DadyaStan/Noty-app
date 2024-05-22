<script setup>
import { ref } from 'vue';
import { useNotesStore } from '@/stores/notes';

const props = defineProps({
  note: Object
});
const emit = defineEmits(['close']);
const notesStore = useNotesStore();

const deleteNote = async () => {
  try {
    await notesStore.deleteNote(props.note.id);
    emit('close');
  } catch (error) {
    console.error('Ошибка при удалении заметки:', error);
    alert('Произошла ошибка при удалении заметки');
  }
};
</script>

<template>
  <div class="backdrop" @click="emit('close')" />
  <div class="modal auth-modal">
    <div class="modal__logo-box">
      <img src="@/components/Modals/assets/regular-modal.svg" alt="SVG Icon"/>
    </div>
    <div class="modal__text-box">
      <h4 class="auth__heading">Вы уверены, что хотите удалить эту заметку?</h4>
    </div>
    <div class="modal__button-box">
      <button type="button" class="modal__button dark-btn" @click="emit('close')">Отмена</button>
      <button type="button" class="modal__button red-btn" @click="deleteNote">Удалить</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/Modal";
</style>