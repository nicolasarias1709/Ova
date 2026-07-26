<template>
  <section class="intro">
    <div class="intro-contenido">
      <p class="intro-etiqueta anim anim-1">OVA · Ciencias Naturales</p>
      <h1 class="intro-titulo anim anim-2">Ley de Ohm</h1>
      <p class="intro-formula-preview anim anim-3">V = I × R</p>

      <p class="intro-justificacion anim anim-4">
        Todo lo que enciendes, cargas o conectas depende de esta relación: desde el cargador
        de tu celular hasta la instalación eléctrica de tu casa. La Ley de Ohm explica por qué
        un cable se calienta, por qué un bombillo brilla más o menos, y por qué algunos
        aparatos necesitan resistencias para no dañarse. Entenderla es la base para diagnosticar
        fallas eléctricas simples y para diseñar cualquier circuito, por básico que sea.
      </p>

      <div class="intro-competencias anim anim-5">
        <h2>Al terminar este OVA vas a poder:</h2>
        <ul class="lista-competencias">
          <li
            v-for="(comp, i) in competencias"
            :key="i"
            class="competencia-item"
            :style="{ animationDelay: `${0.6 + i * 0.15}s` }"
          >
            <span class="competencia-numero">{{ comp.numero }}</span>
            {{ comp.texto }}
          </li>
        </ul>
      </div>

      <RouterLink to="/contenidos" class="btn-comenzar anim anim-6">
        Comenzar
        <span class="btn-flecha">→</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const competencias = [
  { numero: '01', texto: 'Identificar el voltaje (V), la corriente (I) y la resistencia (R) dentro de un circuito.' },
  { numero: '02', texto: 'Aplicar la fórmula V = I × R para despejar cualquiera de las tres variables.' },
  { numero: '03', texto: 'Resolver problemas de circuitos simples con valores reales de voltaje, corriente y resistencia.' }
]
</script>

<style scoped>
.intro {
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--espacio-lg) var(--espacio-md);
}

.intro-contenido {
  max-width: 640px;
  width: 100%;
}

.intro-etiqueta {
  font-family: var(--fuente-datos);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-corriente);
  margin-bottom: var(--espacio-xs);
}

.intro-titulo {
  font-size: 3rem;
  margin-bottom: var(--espacio-xs);
}

.intro-formula-preview {
  font-family: var(--fuente-datos);
  font-size: 1.4rem;
  color: var(--color-cobre-claro);
  margin-bottom: var(--espacio-md);
}

.intro-justificacion {
  color: var(--color-texto);
  font-size: 1.05rem;
  margin-bottom: var(--espacio-lg);
}

.intro-competencias h2 {
  font-size: 1.1rem;
  color: var(--color-texto-suave);
  font-family: var(--fuente-texto);
  font-weight: 500;
  margin-bottom: var(--espacio-sm);
}

.lista-competencias {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--espacio-lg) 0;
  display: flex;
  flex-direction: column;
  gap: var(--espacio-sm);
}

.competencia-item {
  display: flex;
  align-items: flex-start;
  gap: var(--espacio-sm);
  background: var(--color-fondo-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio-borde);
  padding: var(--espacio-sm);

  /* cada tarjeta entra con su propio delay (ver :style en el template) */
  opacity: 0;
  animation: entrarDesdeAbajo 0.6s ease forwards;
}

.competencia-numero {
  font-family: var(--fuente-datos);
  color: var(--color-cobre);
  font-weight: 600;
  flex-shrink: 0;
}

.btn-comenzar {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  background: var(--color-cobre);
  color: var(--color-fondo);
  border-radius: var(--radio-borde);
  text-decoration: none;
  font-weight: 700;
  font-family: var(--fuente-titulo);
  transition: background var(--transicion-rapida), box-shadow var(--transicion-rapida), transform var(--transicion-rapida);
}

.btn-comenzar:hover {
  background: var(--color-cobre-claro);
  box-shadow: var(--sombra-brillo-cobre);
  transform: translateY(-2px);
}

.btn-flecha {
  transition: transform var(--transicion-rapida);
}

.btn-comenzar:hover .btn-flecha {
  transform: translateX(4px);
}

/* ── Animación de entrada escalonada ── */
.anim {
  opacity: 0;
  animation: entrarDesdeAbajo 0.6s ease forwards;
}

.anim-1 { animation-delay: 0s; }
.anim-2 { animation-delay: 0.1s; }
.anim-3 { animation-delay: 0.2s; }
.anim-4 { animation-delay: 0.3s; }
.anim-5 { animation-delay: 0.45s; }
.anim-6 { animation-delay: 1.05s; }

@keyframes entrarDesdeAbajo {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .intro-titulo {
    font-size: 2.2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .anim, .competencia-item {
    animation: none;
    opacity: 1;
  }
}
</style>