<template>
  <div v-if="activa" class="sobrecarga">
    ⚡ ¡Sobrecarga! El componente ha excedido su tolerancia.
  </div>
</template>

<script setup>
defineProps({
  activa: { type: Boolean, default: false }
})
</script>

<style scoped>
.sobrecarga {
  color: var(--color-peligro);
  font-weight: bold;
  animation: parpadeo 0.6s infinite alternate;
}
@keyframes parpadeo {
  from { opacity: 1; }
  to { opacity: 0.4; }
}
</style>
