<template>
  <div class="ejemplo">
    <p v-for="(linea, i) in lineasVisibles" :key="i" class="linea">{{ linea }}</p>
    <button v-if="pasoActual < lineas.length" @click="pasoActual++">Siguiente paso</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const lineas = ref([
  'Datos: V = 12V, R = 4Ω',
  'Fórmula: I = V / R',
  'Sustituyendo: I = 12 / 4',
  'Resultado: I = 3A'
])

const pasoActual = ref(0)
const lineasVisibles = computed(() => lineas.value.slice(0, pasoActual.value))
</script>

<style scoped>
.linea {
  animation: fadeIn 0.4s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
