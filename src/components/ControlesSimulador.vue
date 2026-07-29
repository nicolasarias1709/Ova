<template>
  <div class="controles">
    <h3>Simulador</h3>
    <p class="controles-nota">Mueve el voltaje y la resistencia. La corriente se calcula sola.</p>

    <div class="control-grupo">
      <div class="control-encabezado">
        <label for="slider-voltaje">Voltaje (V)</label>
        <span class="control-valor dato-numerico">{{ voltaje.toFixed(1) }} V</span>
      </div>
      <input
        id="slider-voltaje"
        type="range"
        min="0"
        max="24"
        step="0.5"
        v-model.number="voltaje"
        class="slider slider-cobre"
      />
    </div>

    <div class="control-grupo">
      <div class="control-encabezado">
        <label for="slider-resistencia">Resistencia (R)</label>
        <span class="control-valor dato-numerico">{{ resistencia.toFixed(1) }} Ω</span>
      </div>
      <input
        id="slider-resistencia"
        type="range"
        min="1"
        max="100"
        step="1"
        v-model.number="resistencia"
        class="slider slider-advertencia"
      />
    </div>

    <div class="resultado-calculado">
      <span class="resultado-etiqueta">Corriente calculada (I = V / R)</span>
      <span class="resultado-valor dato-numerico">{{ corrienteCalculada.toFixed(2) }} A</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const voltaje = defineModel('voltaje', { default: 12 })
const resistencia = defineModel('resistencia', { default: 4 })

const corrienteCalculada = computed(() => voltaje.value / resistencia.value)
</script>

<style scoped>
.controles {
  background: var(--color-fondo-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio-borde);
  padding: var(--espacio-md);
  margin: var(--espacio-lg) 0;
}

.controles-nota {
  font-size: 0.9rem;
  margin-bottom: var(--espacio-md);
}

.control-grupo {
  margin-bottom: var(--espacio-md);
}

.control-encabezado {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
}

.control-valor {
  font-size: 1rem;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: var(--color-fondo-elevado);
  outline: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  transition: box-shadow var(--transicion-rapida);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  transition: box-shadow var(--transicion-rapida);
}

.slider-cobre::-webkit-slider-thumb,
.slider-cobre::-moz-range-thumb {
  background: var(--color-cobre);
}
.slider-cobre::-webkit-slider-thumb:hover,
.slider-cobre::-moz-range-thumb:hover {
  box-shadow: var(--sombra-brillo-cobre);
}

.slider-advertencia::-webkit-slider-thumb,
.slider-advertencia::-moz-range-thumb {
  background: var(--color-advertencia);
}
.slider-advertencia::-webkit-slider-thumb:hover,
.slider-advertencia::-moz-range-thumb:hover {
  box-shadow: 0 0 12px rgba(255, 207, 77, 0.5);
}

.resultado-calculado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-fondo-elevado);
  border-radius: var(--radio-borde-sm);
  padding: 0.8rem 1rem;
  margin-top: var(--espacio-sm);
}

.resultado-etiqueta {
  color: var(--color-texto-suave);
  font-size: 0.9rem;
}

.resultado-valor {
  font-size: 1.2rem;
  color: var(--color-corriente);
}
</style>