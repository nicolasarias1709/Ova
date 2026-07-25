<template>
  <nav class="navbar">
    <RouterLink
      v-for="paso in pasos"
      :key="paso.ruta"
      :to="paso.ruta"
      class="navbar-item"
    >
      <span class="navbar-numero">{{ paso.numero }}</span>
      <span class="navbar-texto">{{ paso.nombre }}</span>
    </RouterLink>
  </nav>
</template>

<script setup>
const pasos = [
  { numero: 1, nombre: 'Introducción', ruta: '/introduccion' },
  { numero: 2, nombre: 'Contenidos', ruta: '/contenidos' },
  { numero: 3, nombre: 'Actividades', ruta: '/actividades' },
  { numero: 4, nombre: 'Evaluación', ruta: '/evaluacion' }
]
</script>

<style scoped>
.navbar {
  display: flex;
  gap: var(--espacio-xs);
  flex-wrap: wrap;
  background: var(--color-fondo-suave);
  padding: var(--espacio-xs);
  border-radius: var(--radio-borde);
  border: 1px solid var(--color-borde);
}

.navbar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radio-borde-sm);
  text-decoration: none;
  color: var(--color-texto-suave);
  transition: background var(--transicion-rapida), color var(--transicion-rapida);
}

.navbar-item:hover {
  background: var(--color-fondo-elevado);
  color: var(--color-texto);
}

.navbar-numero {
  font-family: var(--fuente-datos);
  font-size: 0.8rem;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid currentColor;
}

.navbar-texto {
  font-family: var(--fuente-texto);
  font-weight: 500;
  font-size: 0.95rem;
}

/* Paso activo: resaltado en cobre, con brillo sutil */
.navbar-item.router-link-active {
  background: var(--color-fondo-elevado);
  color: var(--color-cobre-claro);
  box-shadow: var(--sombra-brillo-cobre);
}

.navbar-item.router-link-active .navbar-numero {
  background: var(--color-cobre);
  border-color: var(--color-cobre);
  color: var(--color-fondo);
}

@media (max-width: 480px) {
  .navbar-texto {
    display: none; /* en móvil solo se ve el número, ahorra espacio */
  }
}
</style>