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
  gap: 0.75rem;
  padding: 1rem;
  background: var(--color-fondo-suave);
}

.ova-titulo {
  font-size: 1.25rem;
  font-weight: bold;
  font-family: var(--fuente-titulo);
}
</style>
