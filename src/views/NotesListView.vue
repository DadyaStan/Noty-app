<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNotesStore } from "@/stores/notes.js";
import AppHeader from "@/components/AppHeader.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Note from "@/components/Note.vue";
import NoteModal from "@/components/Modals/NoteModal.vue";
import DeleteModal from "@/components/Modals/DeleteModal.vue"; // Новый импорт

const notesStore = useNotesStore();
const showModal = ref(false);
const showDeleteModal = ref(false); // Новая переменная состояния
const currentNote = ref({ id: null, title: '', body: '' });
const modalAction = ref('');

onMounted(() => {
  const userId = JSON.parse(localStorage.getItem('userData')).id;
  notesStore.fetchNotes(userId);
});

const userNotes = computed(() => notesStore.notes);

const openModal = (note, action) => {
  console.log(action);
  currentNote.value = note || { id: null, title: '', body: '' };
  modalAction.value = action;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  currentNote.value = { id: null, title: '', body: '' };
  modalAction.value = '';
};

const openDeleteModal = (note) => {
  currentNote.value = note;
  showDeleteModal.value = true;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  currentNote.value = { id: null, title: '', body: '' };
};
</script>

<template>
  <main class="wrapper">
    <AppHeader />
    <SectionHeader @add-note="openModal(null, 'addNote')" />
    <div class="notes-list container">
      <Note v-for="note in userNotes" :key="note.id" :note="note" @edit="openModal(note, 'editNote')" @delete="openDeleteModal(note)" />
    </div>
    <NoteModal v-if="showModal" :data="{ id: currentNote.id, title: currentNote.title, body: currentNote.body, action: modalAction.value }" @close="closeModal" />
    <DeleteModal v-if="showDeleteModal" :note="currentNote" @close="closeDeleteModal" /> <!-- Новый модальный компонент -->
  </main>
</template>

<style lang="scss" scoped>
.notes-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 384px);
  gap: 64px;
}
</style>
