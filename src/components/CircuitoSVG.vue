<template>
  <svg viewBox="0 0 400 220" class="circuito-svg" xmlns="http://www.w3.org/2000/svg" ref="svgRef">
    <!-- Recorrido completo del cable (los electrones se mueven sobre este mismo path) -->
    <path
      id="cable-recorrido"
      class="cable"
      :class="{ resaltado: variableResaltada === 'I' }"
      d="M100,180 L100,40 L300,40 L300,180 L60,180"
      fill="none"
    />

    <!-- Batería -->
    <g class="bateria" :class="{ resaltado: variableResaltada === 'V' }">
      <line x1="72" y1="166" x2="72" y2="194" class="bateria-terminal-larga" />
      <line x1="88" y1="172" x2="88" y2="188" class="bateria-terminal-corta" />
      <text x="66" y="210" class="etiqueta">V</text>
      <text x="66" y="158" class="etiqueta-signo">+</text>
    </g>

    <!-- Resistencia (zigzag) -->
    <g class="resistor" :class="{ resaltado: variableResaltada === 'R' }">
      <polyline
        points="150,40 160,26 174,54 188,26 202,54 216,26 230,40"
        class="resistor-zigzag"
        fill="none"
        :style="{ stroke: colorResistencia }"
      />
      <text x="175" y="18" class="etiqueta">R</text>
    </g>

    <!-- Bombillo: el brillo (glow) y el color del vidrio cambian según el voltaje -->
    <g class="bombillo">
      <circle
        cx="300"
        cy="110"
        :r="24 + brilloIntensidad * 10"
        class="bombillo-glow"
        :style="{ opacity: brilloIntensidad * 0.6 }"
      />
      <circle
        cx="300"
        cy="110"
        r="20"
        class="bombillo-vidrio"
        :style="{ fill: colorBombillo }"
      />
      <line x1="290" y1="100" x2="310" y2="120" class="bombillo-filamento" :style="{ opacity: 0.4 + brilloIntensidad * 0.6 }" />
      <line x1="310" y1="100" x2="290" y2="120" class="bombillo-filamento" :style="{ opacity: 0.4 + brilloIntensidad * 0.6 }" />
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
  interruptorCerrado: { type: Boolean, default: true },
  variableResaltada: { type: String, default: null }
})

const svgRef = ref(null)

const numeroElectrones = 6

const duracion = computed(() => {
  const i = Math.max(props.corriente, 0.1)
  return Math.max(6 / i, 0.6)
})

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

const brilloIntensidad = computed(() => Math.min(props.voltaje / 20, 1))

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t)
}
const colorBombillo = computed(() => {
  const t = brilloIntensidad.value
  const r = lerp(20, 255, t)
  const g = lerp(50, 244, t)
  const b = lerp(45, 214, t)
  return `rgb(${r}, ${g}, ${b})`
})

// La resistencia cambia de color según cuánta corriente la atraviesa:
// gris (poca corriente) -> naranja (media) -> rojo (mucha, se está calentando)
const colorResistencia = computed(() => {
  const t = Math.min(props.corriente / 8, 1) // se satura a partir de 8A
  const gris = [124, 148, 138]
  const naranja = [255, 145, 0]
  const rojo = [255, 45, 45]

  if (t < 0.5) {
    const t2 = t * 2
    const r = lerp(gris[0], naranja[0], t2)
    const g = lerp(gris[1], naranja[1], t2)
    const b = lerp(gris[2], naranja[2], t2)
    return `rgb(${r}, ${g}, ${b})`
  } else {
    const t2 = (t - 0.5) * 2
    const r = lerp(naranja[0], rojo[0], t2)
    const g = lerp(naranja[1], rojo[1], t2)
    const b = lerp(naranja[2], rojo[2], t2)
    return `rgb(${r}, ${g}, ${b})`
  }
})
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
  transition: stroke var(--transicion-media), filter var(--transicion-media);
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
  stroke-width: 4;
  stroke-linejoin: round;
  transition: stroke 0.3s ease;
}

.bombillo-glow {
  fill: var(--color-advertencia);
  filter: blur(6px);
  transition: opacity var(--transicion-media);
}

.bombillo-vidrio {
  stroke: var(--color-corriente);
  stroke-width: 3;
  transition: fill var(--transicion-media);
}

.bombillo-filamento {
  stroke: var(--color-fondo);
  stroke-width: 2;
  transition: opacity var(--transicion-media);
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

.bateria.resaltado .bateria-terminal-larga,
.bateria.resaltado .bateria-terminal-corta {
  stroke: var(--color-corriente);
  filter: drop-shadow(0 0 6px var(--color-corriente));
}

.resistor.resaltado .resistor-zigzag {
  stroke: var(--color-corriente);
  stroke-width: 5;
  filter: drop-shadow(0 0 6px var(--color-corriente));
}

.cable.resaltado {
  stroke: var(--color-corriente);
  filter: drop-shadow(0 0 6px var(--color-corriente));
}

@media (prefers-reduced-motion: reduce) {
  .electron {
    animation: none;
  }
}
</style>