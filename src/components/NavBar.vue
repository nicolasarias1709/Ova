<template>
  <nav class="navbar">
    <RouterLink to="/introduccion">1. Introducción</RouterLink>
    <RouterLink to="/contenidos">2. Contenidos</RouterLink>
    <RouterLink to="/actividades">3. Actividades</RouterLink>
    <RouterLink to="/evaluacion">4. Evaluación</RouterLink>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.navbar a {
  color: var(--color-texto-suave);
  text-decoration: none;
}
.navbar a.router-link-active {
  color: var(--color-primario);
  font-weight: bold;
}
</style>
