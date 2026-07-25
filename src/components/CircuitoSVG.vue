<template>
  <svg viewBox="0 0 400 200" class="circuito-svg">
    <!-- Placeholder: aquí irá el circuito real -->
    <text x="20" y="100" fill="var(--color-texto-suave)">
      Circuito SVG
    </text>
  </svg>
</template>

<script setup>
defineProps({
  voltaje: { type: Number, default: 0 },
  corriente: { type: Number, default: 0 },
  resistencia: { type: Number, default: 0 },
  interruptorCerrado: { type: Boolean, default: true }
})
</script>

<style scoped>
.circuito-svg {
  width: 100%;
  max-width: 500px;
  height: auto;
}
</style>
