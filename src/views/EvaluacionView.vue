<template>
  <section class="paso paso-evaluacion">
    <h1>Evaluación</h1>
    <p class="evaluacion-intro">Resuelve los siguientes ejercicios aplicando V = I × R. Cada uno te pide despejar una variable distinta.</p>

    <EjercicioNumerico
      v-for="(ej, i) in ejercicios"
      :key="i"
      :numero="i + 1"
      :enunciado="ej.enunciado"
      :unidad="ej.unidad"
      @enviar="respuesta => comprobar(ej, respuesta)"
    />

    <ModalRetroalimentacion
      :visible="modalVisible"
      :correcto="ultimoResultado.correcto"
      :explicacion="ultimoResultado.explicacion"
      @cerrar="modalVisible = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import EjercicioNumerico from '../components/EjercicioNumerico.vue'
import ModalRetroalimentacion from '../components/ModalRetroalimentacion.vue'

const ejercicios = ref([
  {
    enunciado: '1) Un circuito tiene V = 10V y R = 2Ω. ¿Cuánto vale la corriente (I)?',
    unidad: 'A',
    variable: 'I',
    respuestaCorrecta: 10 / 2,
    despeje: 'I = V / R = 10 / 2 = 5 A'
  },
  {
    enunciado: '2) Por una resistencia de R = 3Ω circula una corriente de I = 4A. ¿Cuál es el voltaje (V)?',
    unidad: 'V',
    variable: 'V',
    respuestaCorrecta: 4 * 3,
    despeje: 'V = I × R = 4 × 3 = 12 V'
  },
  {
    enunciado: '3) Una batería de V = 20V genera una corriente de I = 2A. ¿Cuál es la resistencia (R)?',
    unidad: 'Ω',
    variable: 'R',
    respuestaCorrecta: 20 / 2,
    despeje: 'R = V / I = 20 / 2 = 10 Ω'
  },
  {
    enunciado: '4) Un circuito tiene V = 9V y R = 3Ω. ¿Cuánto vale la corriente (I)?',
    unidad: 'A',
    variable: 'I',
    respuestaCorrecta: 9 / 3,
    despeje: 'I = V / R = 9 / 3 = 3 A'
  },
  {
    enunciado: '5) Por una resistencia de R = 8Ω circula una corriente de I = 1.5A. ¿Cuál es el voltaje (V)?',
    unidad: 'V',
    variable: 'V',
    respuestaCorrecta: 1.5 * 8,
    despeje: 'V = I × R = 1.5 × 8 = 12 V'
  }
])

const modalVisible = ref(false)
const ultimoResultado = ref({ correcto: false, explicacion: '' })

function comprobar(ejercicio, respuesta) {
  const correcto = Math.abs(respuesta - ejercicio.respuestaCorrecta) < 0.05

  ultimoResultado.value = {
    correcto,
    explicacion: correcto
      ? ''
      : `El procedimiento correcto es: ${ejercicio.despeje}`
  }
  modalVisible.value = true
}
</script>

<style scoped>
.paso {
  padding: 2rem;
  min-height: 70vh;
  max-width: 640px;
  margin: 0 auto;
}

.evaluacion-intro {
  margin-bottom: var(--espacio-lg);
}
</style>