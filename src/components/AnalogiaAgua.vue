<template>
  <div class="analogia">
    <h3>Analogía del agua</h3>
    <p class="analogia-texto">
      Imagina el voltaje como la <strong>altura del agua</strong> en un tanque, la resistencia
      como una <strong>válvula</strong> que se abre o se cierra, y la corriente como el
      <strong>chorro de agua</strong> que sale. Mueve el slider y observa cómo cambia el tanque.
    </p>

    <div class="analogia-controles">
      <label>
        Nivel del tanque (equivale al voltaje): <span class="dato-numerico">{{ nivelTanque }}</span>
        <input type="range" min="0" max="24" v-model.number="nivelTanque" />
      </label>
    </div>

    <svg viewBox="0 0 300 180" class="analogia-svg">
      <!-- Tanque -->
      <rect x="30" y="20" width="90" height="130" class="tanque-contorno" />
      <rect
        x="32"
        :y="150 - alturaAgua"
        width="86"
        :height="alturaAgua"
        class="tanque-agua"
      />
      <text x="75" y="15" class="etiqueta" text-anchor="middle">Tanque</text>

      <!-- Tubería hacia la válvula -->
      <line x1="120" y1="145" x2="180" y2="145" class="tuberia" />

      <!-- Válvula (resistencia) -->
      <rect x="175" y="135" width="20" height="20" class="valvula" />
      <text x="185" y="120" class="etiqueta" text-anchor="middle">Válvula</text>

      <!-- Chorro de salida: el ancho representa la corriente -->
      <rect
        x="195"
        y="145"
        :width="anchoChorro"
        height="4"
        class="chorro"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const nivelTanque = ref(12)

const alturaAgua = computed(() => (nivelTanque.value / 24) * 130)
const anchoChorro = computed(() => 20 + (nivelTanque.value / 24) * 60)
</script>

<style scoped>
.analogia {
  margin: var(--espacio-lg) 0;
  background: var(--color-fondo-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio-borde);
  padding: var(--espacio-md);
}

.analogia-texto {
  margin-bottom: var(--espacio-md);
}

.analogia-controles {
  margin-bottom: var(--espacio-md);
}

.analogia-controles label {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--color-texto-suave);
}

.analogia-svg {
  width: 100%;
  max-width: 340px;
  display: block;
  margin: 0 auto;
}

.tanque-contorno {
  fill: none;
  stroke: var(--color-texto-suave);
  stroke-width: 2;
}

.tanque-agua {
  fill: var(--color-corriente);
  opacity: 0.6;
  transition: height 0.3s ease, y 0.3s ease;
}

.tuberia {
  stroke: var(--color-texto-suave);
  stroke-width: 3;
}

.valvula {
  fill: var(--color-advertencia);
  stroke: var(--color-texto);
  stroke-width: 1;
}

.chorro {
  fill: var(--color-corriente);
  transition: width 0.3s ease;
}

.etiqueta {
  font-family: var(--fuente-texto);
  font-size: 11px;
  fill: var(--color-texto-suave);
}
</style>