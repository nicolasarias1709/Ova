<template>
  <div class="analogia">
    <p class="nota">Analogía del agua (opcional)</p>
  </div>
</template>

<script setup>
defineProps({
  voltaje: { type: Number, default: 0 },
  corriente: { type: Number, default: 0 }
})
</script>

<style scoped>
.nota {
  color: var(--color-texto-suave);
  font-style: italic;
}
</style>
