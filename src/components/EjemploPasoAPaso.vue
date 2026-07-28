<template>
  <div class="ejemplo">
    <h3 class="ejemplo-titulo">Ejemplo resuelto</h3>
    <p class="ejemplo-enunciado">{{ enunciado }}</p>

    <div class="ejemplo-lineas">
      <div
        v-for="(paso, i) in pasosVisibles"
        :key="i"
        class="linea"
      >
        <span class="linea-etiqueta">{{ paso.etiqueta }}</span>
        <span class="linea-contenido dato-numerico">{{ paso.contenido }}</span>
      </div>
    </div>

    <div class="ejemplo-controles">
      <button
        v-if="pasoActual < pasos.length"
        class="btn-siguiente"
        @click="pasoActual++"
      >
        Siguiente paso
      </button>
      <button
        v-else
        class="btn-reiniciar"
        @click="pasoActual = 0"
      >
        Reiniciar ejemplo
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const enunciado = 'Un circuito tiene una batería de 12V conectada a una resistencia de 4Ω. ¿Cuánta corriente circula?'

const pasos = ref([
  { etiqueta: 'Datos conocidos', contenido: 'V = 12V   ·   R = 4Ω' },
  { etiqueta: 'Qué nos preguntan', contenido: 'I = ?  (la corriente)' },
  { etiqueta: 'Fórmula a usar', contenido: 'I = V / R' },
  { etiqueta: 'Sustituyendo los valores', contenido: 'I = 12 / 4' },
  { etiqueta: 'Resultado', contenido: 'I = 3 A' }
])

const pasoActual = ref(0)
const pasosVisibles = computed(() => pasos.value.slice(0, pasoActual.value))
</script>

<style scoped>
.ejemplo {
  margin: var(--espacio-lg) 0;
  background: var(--color-fondo-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio-borde);
  padding: var(--espacio-md);
}

.ejemplo-titulo {
  margin-bottom: var(--espacio-xs);
}

.ejemplo-enunciado {
  color: var(--color-texto);
  margin-bottom: var(--espacio-md);
}

.ejemplo-lineas {
  display: flex;
  flex-direction: column;
  gap: var(--espacio-xs);
  min-height: 2rem;
  margin-bottom: var(--espacio-md);
}

.linea {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--espacio-sm);
  background: var(--color-fondo-elevado);
  border-radius: var(--radio-borde-sm);
  padding: 0.6rem 0.9rem;
  animation: entrarLinea 0.4s ease;
}

.linea-etiqueta {
  color: var(--color-texto-suave);
  font-size: 0.9rem;
}

.linea-contenido {
  font-size: 1.05rem;
  color: var(--color-corriente);
}

@keyframes entrarLinea {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.btn-siguiente,
.btn-reiniciar {
  padding: 0.6rem 1.2rem;
  border-radius: var(--radio-borde-sm);
  border: none;
  font-family: var(--fuente-titulo);
  font-weight: 600;
  transition: background var(--transicion-rapida), box-shadow var(--transicion-rapida);
}

.btn-siguiente {
  background: var(--color-cobre);
  color: var(--color-fondo);
}

.btn-siguiente:hover {
  background: var(--color-cobre-claro);
  box-shadow: var(--sombra-brillo-cobre);
}

.btn-reiniciar {
  background: transparent;
  border: 1px solid var(--color-borde);
  color: var(--color-texto-suave);
}

.btn-reiniciar:hover {
  color: var(--color-texto);
  border-color: var(--color-texto-suave);
}

@media (prefers-reduced-motion: reduce) {
  .linea {
    animation: none;
  }
}
</style>