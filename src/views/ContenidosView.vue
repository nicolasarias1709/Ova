<template>
  <section class="paso paso-contenidos">
    <h1>Contenidos Multimediales</h1>

    <CircuitoSVG
      :voltaje="voltaje"
      :corriente="corriente"
      :resistencia="resistencia"
      :variable-resaltada="variableResaltada"
    />

    <FormulaInteractiva @resaltar="v => (variableResaltada = v)" />

    <EjemploPasoAPaso />

    <AnalogiaAgua :voltaje="voltaje" :corriente="corriente" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CircuitoSVG from '../components/CircuitoSVG.vue'
import FormulaInteractiva from '../components/FormulaInteractiva.vue'
import EjemploPasoAPaso from '../components/EjemploPasoAPaso.vue'
import AnalogiaAgua from '../components/AnalogiaAgua.vue'

const voltaje = ref(12)
const corriente = ref(3)
const resistencia = ref(4)
const variableResaltada = ref(null)
</script>

<style scoped>
.paso {
  padding: 2rem;
  min-height: 70vh;
}
</style>
