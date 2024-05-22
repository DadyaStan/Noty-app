<script setup>
import Form from "@/components/Modals/AuthModal.vue";

</script>

<template>
  <div class="auth">
    <Form modal-type="auth" />
  </div>
</template>

<style scoped lang="scss">
.auth {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(50%);
}
</style>