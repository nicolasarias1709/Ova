<template>
  <div class="interruptor-wrapper">
    <button
      class="interruptor"
      :class="{ cerrado: cerrado }"
      @click="$emit('update:cerrado', !cerrado)"
      :aria-pressed="cerrado"
    >
      <span class="interruptor-riel">
        <span class="interruptor-perilla"></span>
      </span>
    </button>
    <span class="interruptor-texto" :class="{ 'texto-abierto': !cerrado }">
      {{ cerrado ? 'Circuito cerrado' : 'Circuito abierto' }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  cerrado: { type: Boolean, default: true }
})
defineEmits(['update:cerrado'])
</script>

<style scoped>
.interruptor-wrapper {
  display: flex;
  align-items: center;
  gap: var(--espacio-sm);
  margin: var(--espacio-md) 0;
}

.interruptor {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.interruptor-riel {
  display: block;
  width: 56px;
  height: 28px;
  border-radius: 999px;
  background: var(--color-peligro);
  position: relative;
  transition: background var(--transicion-media);
}

.interruptor.cerrado .interruptor-riel {
  background: var(--color-exito);
}

.interruptor-perilla {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--color-texto);
  transition: transform var(--transicion-media);
}

.interruptor.cerrado .interruptor-perilla {
  transform: translateX(28px);
}

.interruptor-texto {
  font-family: var(--fuente-datos);
  font-size: 0.95rem;
  color: var(--color-exito);
}

.interruptor-texto.texto-abierto {
  color: var(--color-peligro);
}
</style>