<template>
  <section class="paso paso-actividades">
    <h1>Simulador Interactivo</h1>

    <CircuitoSVG
      :voltaje="voltaje"
      :corriente="corriente"
      :resistencia="resistencia"
      :interruptor-cerrado="interruptorCerrado"
    />

    <ControlesSimulador />

    <InterruptorSwitch v-model:cerrado="interruptorCerrado" />

    <GraficaVI :puntos="puntosGrafica" />

    <SobrecargaAnimacion :activa="voltaje > 20" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CircuitoSVG from '../components/CircuitoSVG.vue'
import ControlesSimulador from '../components/ControlesSimulador.vue'
import InterruptorSwitch from '../components/InterruptorSwitch.vue'
import GraficaVI from '../components/GraficaVI.vue'
import SobrecargaAnimacion from '../components/SobrecargaAnimacion.vue'

const voltaje = ref(12)
const corriente = ref(3)
const resistencia = ref(4)
const interruptorCerrado = ref(true)

const puntosGrafica = ref([])
</script>

<style scoped>
.paso {
  padding: 2rem;
  min-height: 70vh;
}
</style>
