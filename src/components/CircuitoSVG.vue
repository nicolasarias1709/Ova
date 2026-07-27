<template>
  <svg viewBox="0 0 400 220" class="circuito-svg" xmlns="http://www.w3.org/2000/svg" ref="svgRef">
    <!-- Recorrido completo del cable (los electrones se mueven sobre este mismo path) -->
    <path
      id="cable-recorrido"
      class="cable"
      d="M100,180 L100,40 L300,40 L300,180 L60,180"
      fill="none"
    />

    <!-- Batería -->
    <g class="bateria">
      <line x1="72" y1="166" x2="72" y2="194" class="bateria-terminal-larga" />
      <line x1="88" y1="172" x2="88" y2="188" class="bateria-terminal-corta" />
      <text x="66" y="210" class="etiqueta">V</text>
      <text x="66" y="158" class="etiqueta-signo">+</text>
    </g>

    <!-- Resistencia (zigzag) -->
    <g class="resistor">
      <polyline
        points="150,40 160,26 174,54 188,26 202,54 216,26 230,40"
        class="resistor-zigzag"
        fill="none"
      />
      <text x="175" y="18" class="etiqueta">R</text>
    </g>

    <!-- Bombillo -->
    <g class="bombillo">
      <circle cx="300" cy="110" r="20" class="bombillo-vidrio" />
      <line x1="290" y1="100" x2="310" y2="120" class="bombillo-filamento" />
      <line x1="310" y1="100" x2="290" y2="120" class="bombillo-filamento" />
    </g>

    <!-- Electrones animados: siguen el mismo recorrido del cable -->
    <circle
      v-for="n in numeroElectrones"
      :key="n"
      class="electron"
      r="4"
    >
      <animateMotion
        :dur="`${duracion}s`"
        repeatCount="indefinite"
        :begin="`${(n - 1) * (duracion / numeroElectrones)}s`"
      >
        <mpath href="#cable-recorrido" />
      </animateMotion>
    </circle>
  </svg>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  voltaje: { type: Number, default: 0 },
  corriente: { type: Number, default: 0 },
  resistencia: { type: Number, default: 0 },
  interruptorCerrado: { type: Boolean, default: true }
})

const svgRef = ref(null)

// Cuántos electrones se ven a la vez sobre el cable
const numeroElectrones = 6

// A más corriente, menos segundos tarda la vuelta completa (más rápido)
const duracion = computed(() => {
  const i = Math.max(props.corriente, 0.1)
  return Math.max(6 / i, 0.6)
})

// Si el interruptor se abre, se pausan todas las animaciones del SVG (los electrones se congelan)
watch(
  () => props.interruptorCerrado,
  (cerrado) => {
    if (!svgRef.value) return
    if (cerrado) {
      svgRef.value.unpauseAnimations()
    } else {
      svgRef.value.pauseAnimations()
    }
  }
)
</script>

<style scoped>
.circuito-svg {
  width: 100%;
  max-width: 460px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.cable {
  stroke: var(--color-cobre);
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.bateria-terminal-larga {
  stroke: var(--color-texto);
  stroke-width: 4;
}

.bateria-terminal-corta {
  stroke: var(--color-texto);
  stroke-width: 8;
}

.resistor-zigzag {
  stroke: var(--color-advertencia);
  stroke-width: 4;
  stroke-linejoin: round;
}

.bombillo-vidrio {
  fill: var(--color-fondo-suave);
  stroke: var(--color-corriente);
  stroke-width: 3;
}

.bombillo-filamento {
  stroke: var(--color-corriente);
  stroke-width: 2;
}

.etiqueta {
  font-family: var(--fuente-datos);
  font-size: 14px;
  fill: var(--color-texto);
}

.etiqueta-signo {
  font-family: var(--fuente-datos);
  font-size: 14px;
  fill: var(--color-texto-suave);
}

.electron {
  fill: var(--color-corriente);
  filter: drop-shadow(0 0 3px var(--color-corriente));
}

@media (prefers-reduced-motion: reduce) {
  .electron {
    animation: none;
  }
}
</style>