<script setup>
const props = defineProps({
  note: Object
});
const emit = defineEmits(['edit', 'delete']); // Добавлено новое событие
</script>

<template>
  <div class="note">
    <div class="note__text-box">
      <h3 class="note__title">{{ note.title }}</h3>
      <p class="note__content">{{ note.body }}</p>
    </div>
    <div class="note__actions-box">
      <div class="note__delete" @click="emit('delete', note)">Удалить</div>
      <div class="note__change" @click="emit('edit', note)">Изменить</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.note {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 25px 25px;
  border-radius: 12px;
  background-color: var(--soft-grey);

  &__text-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__content {
    font-size: 16px;
    color: var(--light-grey);
  }

  &__actions-box {
    display: flex;
    gap: 20px;
  }

  &__delete {
    color: var(--bright-red);
  }

  &__change {
    color: var(--main-white);
  }
}
</style>