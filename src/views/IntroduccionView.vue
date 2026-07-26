<template>
  <section class="intro">
    <div class="intro-contenido">
      <p class="intro-etiqueta">OVA · Ciencias Naturales</p>
      <h1 class="intro-titulo">Ley de Ohm</h1>
      <p class="intro-formula-preview">V = I × R</p>

      <p class="intro-justificacion">
        Todo lo que enciendes, cargas o conectas depende de esta relación: desde el cargador
        de tu celular hasta la instalación eléctrica de tu casa. La Ley de Ohm explica por qué
        un cable se calienta, por qué un bombillo brilla más o menos, y por qué algunos
        aparatos necesitan resistencias para no dañarse. Entenderla es la base para diagnosticar
        fallas eléctricas simples y para diseñar cualquier circuito, por básico que sea.
      </p>

      <div class="intro-competencias">
        <h2>Al terminar este OVA vas a poder:</h2>
        <ul class="lista-competencias">
          <li>
            <span class="competencia-numero">01</span>
            Identificar el voltaje (V), la corriente (I) y la resistencia (R) dentro de un circuito.
          </li>
          <li>
            <span class="competencia-numero">02</span>
            Aplicar la fórmula V = I × R para despejar cualquiera de las tres variables.
          </li>
          <li>
            <span class="competencia-numero">03</span>
            Resolver problemas de circuitos simples con valores reales de voltaje, corriente y resistencia.
          </li>
        </ul>
      </div>

      <RouterLink to="/contenidos" class="btn-comenzar">Comenzar</RouterLink>
    </div>
  </section>
</template>

<script setup>
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

.lista-competencias li {
  display: flex;
  align-items: flex-start;
  gap: var(--espacio-sm);
  background: var(--color-fondo-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio-borde);
  padding: var(--espacio-sm);
}

.competencia-numero {
  font-family: var(--fuente-datos);
  color: var(--color-cobre);
  font-weight: 600;
  flex-shrink: 0;
}

.btn-comenzar {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background: var(--color-cobre);
  color: var(--color-fondo);
  border-radius: var(--radio-borde);
  text-decoration: none;
  font-weight: 700;
  font-family: var(--fuente-titulo);
  transition: background var(--transicion-rapida), box-shadow var(--transicion-rapida);
}

.btn-comenzar:hover {
  background: var(--color-cobre-claro);
  box-shadow: var(--sombra-brillo-cobre);
}

@media (max-width: 600px) {
  .intro-titulo {
    font-size: 2.2rem;
  }
}
</style>