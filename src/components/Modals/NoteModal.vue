<script setup>
import { ref, watch, reactive } from 'vue';
import { useNotesStore } from '@/stores/notes';

const props = defineProps({
  data: Object
});
const emit = defineEmits(['close']);
const notesStore = useNotesStore();

const modalData = reactive({
  id: props.data.id,
  title: props.data.title,
  body: props.data.body,
  action: props.data.action
});

watch(() => props.data, (newData) => {
  modalData.id = newData.id;
  modalData.title = newData.title;
  modalData.body = newData.body;
  modalData.action = newData.action;
}, { immediate: true });

const getAction = () => {
  console.log(modalData);
  if (modalData.action === "addNote") {
    return addNote();
  } else {
    return editNote();
  }
};

const addNote = async () => {
  if (!modalData.title || !modalData.body) {
    alert('Заголовок и текст не могут быть пустыми');
    return;
  }

  try {
    const userId = localStorage.getItem("userId");
    await notesStore.addNote({
      title: modalData.title,
      body: modalData.body,
    }, userId);
    resetForm();
    emit('close');
  } catch (error) {
    console.error('Ошибка при добавлении заметки:', error);
    alert('Произошла ошибка при добавлении заметки');
  }
};

const editNote = async () => {
  if (!modalData.title || !modalData.body) {
    alert('Заголовок и текст не могут быть пустыми');
    return;
  }

  try {
    const newData = {
      title: modalData.title,
      body: modalData.body,
    };
    await notesStore.editNote({ id: modalData.id, newData });
    resetForm();
    emit('close');
  } catch (error) {
    console.error('Ошибка при редактировании заметки:', error);
    alert('Произошла ошибка при редактировании заметки');
  }
};

const resetForm = () => {
  modalData.id = null;
  modalData.title = '';
  modalData.body = '';
  modalData.action = '';
};
</script>

<template>
  <div class="backdrop" @click="emit('close')" />
  <div class="modal auth-modal">
    <div class="modal__logo-box">
      <img src="@/components/Modals/assets/regular-modal.svg" alt="SVG Icon"/>
    </div>
    <div class="modal__text-box">
      <h4 class="auth__heading">{{ modalData.action === 'addNote' ? 'Добавить заметку' : 'Изменить заметку' }}</h4>
    </div>
    <form class="modal__form-box" @submit.prevent="getAction">
      <div class="modal__input-box">
        <label for="title" class="modal__label">Заголовок</label>
        <input type="text" id="title" class="modal__input" v-model="modalData.title">
      </div>
      <div class="modal__input-box">
        <label for="text" class="modal__label">Текст</label>
        <input type="text" id="body" class="modal__input" v-model="modalData.body">
      </div>
      <div class="modal__button-box">
        <button type="button" class="modal__button dark-btn" @click="emit('close')">Отмена</button>
        <button type="submit" class="modal__button blue-btn">{{ modalData.action === 'addNote' ? 'Добавить' : 'Сохранить' }}</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "assets/Modal";
</style>