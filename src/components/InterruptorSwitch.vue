<template>
  <button class="switch" :class="{ activo: cerrado }" @click="$emit('update:cerrado', !cerrado)">
    {{ cerrado ? 'Circuito cerrado' : 'Circuito abierto' }}
  </button>
</template>

<script setup>
defineProps({
  cerrado: { type: Boolean, default: true }
})
defineEmits(['update:cerrado'])
</script>

<style scoped>
.switch {
  padding: 0.5rem 1rem;
  border-radius: var(--radio-borde);
  border: 2px solid var(--color-primario);
  background: transparent;
  color: var(--color-texto);
  cursor: pointer;
  transition: background var(--transicion-rapida);
}
.switch.activo {
  background: var(--color-primario);
  color: var(--color-fondo);
}
</style>
