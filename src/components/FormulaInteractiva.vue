<template>
  <div class="formula">
    <span class="variable" @mouseenter="$emit('resaltar', 'V')" @mouseleave="$emit('resaltar', null)">V</span>
    =
    <span class="variable" @mouseenter="$emit('resaltar', 'I')" @mouseleave="$emit('resaltar', null)">I</span>
    ×
    <span class="variable" @mouseenter="$emit('resaltar', 'R')" @mouseleave="$emit('resaltar', null)">R</span>
  </div>
</template>

<script setup>
defineEmits(['resaltar'])
</script>

<style scoped>
.formula {
  font-size: 2rem;
  font-family: var(--fuente-titulo);
}
.variable {
  cursor: pointer;
  padding: 0 0.3rem;
  border-radius: 4px;
  transition: background var(--transicion-rapida);
}
.variable:hover {
  background: var(--color-primario);
  color: var(--color-fondo);
}
</style>
