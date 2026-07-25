<template>
  <div id="app">
    <header class="ova-header">
      <span class="ova-titulo">OVA · Ley de Ohm</span>
      <NavBar />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.ova-header {
  display: flex;
  flex-direction: column;
  gap: var(--espacio-sm);
  padding: var(--espacio-md);
  background: var(--color-fondo-suave);
  border-bottom: 1px solid var(--color-borde);
}

.ova-titulo {
  font-size: 1.3rem;
  font-weight: 700;
  font-family: var(--fuente-titulo);
  color: var(--color-corriente);
}
</style>