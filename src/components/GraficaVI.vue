<template>
  <div class="grafica-wrapper">
    <h3>Relación V vs I</h3>
    <p class="grafica-nota">Con esta resistencia (R = {{ resistencia }} Ω), así se comporta la corriente al variar el voltaje. Fíjate que siempre es una línea recta.</p>

    <svg viewBox="0 0 300 200" class="grafica-svg">
      <line x1="40" y1="20" x2="40" y2="170" class="eje" />
      <line x1="40" y1="170" x2="280" y2="170" class="eje" />
      <text x="10" y="30" class="etiqueta-eje">I (A)</text>
      <text x="255" y="190" class="etiqueta-eje">V (V)</text>

      <polyline :points="puntosLinea" class="linea-vi" fill="none" />

      <circle :cx="puntoActualX" :cy="puntoActualY" r="5" class="punto-actual" />
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  resistencia: { type: Number, default: 4 },
  voltajeActual: { type: Number, default: 0 },
  corrienteActual: { type: Number, default: 0 }
})

const origenX = 40
const finX = 280
const origenY = 170
const finY = 20
const voltajeMax = 24

const corrienteMax = computed(() => Math.max(voltajeMax / props.resistencia, 0.1))

function escalarX(v) {
  return origenX + (v / voltajeMax) * (finX - origenX)
}
function escalarY(i) {
  return origenY - (i / corrienteMax.value) * (origenY - finY)
}

const puntosLinea = computed(() => {
  const x1 = escalarX(0)
  const y1 = escalarY(0)
  const x2 = escalarX(voltajeMax)
  const y2 = escalarY(voltajeMax / props.resistencia)
  return `${x1},${y1} ${x2},${y2}`
})

const puntoActualX = computed(() => escalarX(props.voltajeActual))
const puntoActualY = computed(() => escalarY(props.corrienteActual))
</script>

<style scoped>
.grafica-wrapper {
  margin: var(--espacio-lg) 0;
  background: var(--color-fondo-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio-borde);
  padding: var(--espacio-md);
}

.grafica-nota {
  font-size: 0.9rem;
  margin-bottom: var(--espacio-sm);
}

.grafica-svg {
  width: 100%;
  max-width: 360px;
  display: block;
  margin: 0 auto;
}

.eje {
  stroke: var(--color-texto-suave);
  stroke-width: 1.5;
}

.etiqueta-eje {
  font-family: var(--fuente-datos);
  font-size: 11px;
  fill: var(--color-texto-suave);
}

.linea-vi {
  stroke: var(--color-cobre);
  stroke-width: 2.5;
  transition: all 0.2s ease;
}

.punto-actual {
  fill: var(--color-corriente);
  filter: drop-shadow(0 0 5px var(--color-corriente));
  transition: cx 0.15s ease, cy 0.15s ease;
}
</style>