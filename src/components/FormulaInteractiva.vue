<template>
  <div class="formula-wrapper">
    <p class="formula-titulo">Pasa el mouse sobre cada letra:</p>
    <div class="formula">
      <span
        class="variable"
        :class="{ activa: resaltada === 'V' }"
        @mouseenter="resaltar('V')"
        @mouseleave="resaltar(null)"
      >V</span>
      <span class="signo">=</span>
      <span
        class="variable"
        :class="{ activa: resaltada === 'I' }"
        @mouseenter="resaltar('I')"
        @mouseleave="resaltar(null)"
      >I</span>
      <span class="signo">×</span>
      <span
        class="variable"
        :class="{ activa: resaltada === 'R' }"
        @mouseenter="resaltar('R')"
        @mouseleave="resaltar(null)"
      >R</span>
    </div>
    <p class="formula-descripcion">
      <span v-if="resaltada === 'V'">V = Voltaje: la fuente que empuja a los electrones (la batería).</span>
      <span v-else-if="resaltada === 'I'">I = Corriente: el flujo de electrones por el cable.</span>
      <span v-else-if="resaltada === 'R'">R = Resistencia: lo que dificulta el paso de la corriente.</span>
      <span v-else>Voltaje = Corriente × Resistencia</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['resaltar'])
const resaltada = ref(null)

function resaltar(variable) {
  resaltada.value = variable
  emit('resaltar', variable)
}
</script>

<style scoped>
.formula-wrapper {
  margin: var(--espacio-lg) 0;
}

.formula-titulo {
  font-size: 0.9rem;
  color: var(--color-texto-suave);
  margin-bottom: var(--espacio-xs);
}

.formula {
  font-size: 2.4rem;
  font-family: var(--fuente-datos);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.signo {
  color: var(--color-texto-suave);
}

.variable {
  cursor: pointer;
  padding: 0.1rem 0.6rem;
  border-radius: var(--radio-borde-sm);
  transition: background var(--transicion-rapida), color var(--transicion-rapida), transform var(--transicion-rapida);
  color: var(--color-texto);
}

.variable:hover,
.variable.activa {
  background: var(--color-corriente);
  color: var(--color-fondo);
  transform: translateY(-2px);
  box-shadow: var(--sombra-brillo-corriente);
}

.formula-descripcion {
  margin-top: var(--espacio-sm);
  min-height: 1.5em;
  color: var(--color-texto-suave);
  font-size: 0.95rem;
}
</style>