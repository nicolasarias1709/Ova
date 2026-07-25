<template>
  <div class="controles">
    <label>
      Voltaje (V): {{ voltaje }} V
      <input type="range" min="0" max="24" v-model.number="voltaje" />
    </label>

    <label>
      Resistencia (R): {{ resistencia }} Ω
      <input type="range" min="1" max="100" v-model.number="resistencia" />
    </label>

    <p class="calculado">Corriente calculada (I = V / R): {{ corrienteCalculada.toFixed(2) }} A</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const voltaje = ref(12)
const resistencia = ref(4)
const corrienteCalculada = computed(() => voltaje.value / resistencia.value)
</script>

<style scoped>
.controles {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.calculado {
  font-weight: bold;
  color: var(--color-primario);
}
</style>
