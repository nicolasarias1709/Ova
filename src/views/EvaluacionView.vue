<template>
  <section class="paso paso-evaluacion">
    <h1>Evaluación</h1>

    <EjercicioNumerico
      v-for="(ej, i) in ejercicios"
      :key="i"
      :enunciado="ej.enunciado"
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

// (variar cuál variable falta despejar: V, I o R) con valores personalizados
const ejercicios = ref([
  { enunciado: 'Si V=10V y R=2Ω, ¿cuánto vale I?', respuestaCorrecta: 5, variable: 'I' },
  { enunciado: 'Si I=4A y R=3Ω, ¿cuánto vale V?', respuestaCorrecta: 12, variable: 'V' },
  { enunciado: 'Si V=20V e I=2A, ¿cuánto vale R?', respuestaCorrecta: 10, variable: 'R' },
  { enunciado: 'Si V=9V y R=3Ω, ¿cuánto vale I?', respuestaCorrecta: 3, variable: 'I' },
  { enunciado: 'Si I=1.5A y R=8Ω, ¿cuánto vale V?', respuestaCorrecta: 12, variable: 'V' }
])

const modalVisible = ref(false)
const ultimoResultado = ref({ correcto: false, explicacion: '' })

function comprobar(ejercicio, respuesta) {
  const correcto = respuesta === ejercicio.respuestaCorrecta
  ultimoResultado.value = {
    correcto,
    explicacion: correcto
      ? ''
      : `El procedimiento correcto despeja ${ejercicio.variable}. Resultado esperado: ${ejercicio.respuestaCorrecta}`
  }
  modalVisible.value = true
}
</script>

<style scoped>
.paso {
  padding: 2rem;
  min-height: 70vh;
}
</style>
