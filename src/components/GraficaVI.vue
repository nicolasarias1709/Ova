<template>
  <div class="grafica-wrapper">
    <p class="nota">Gráfica V vs I</p>
  </div>
</template>

<script setup>
defineProps({
  puntos: { type: Array, default: () => [] } // [{ v: Number, i: Number }, ...]
})
</script>

<style scoped>
.nota {
  color: var(--color-texto-suave);
  font-style: italic;
}
</style>
