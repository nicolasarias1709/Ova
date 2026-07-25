<template>
  <section class="paso paso-intro">
    <h1>Ley de Ohm</h1>
    <p>Justificación pendiente (3-4 líneas sobre por qué la Ley de Ohm es fundamental).</p>

    <h2>Competencias a desarrollar</h2>
    <ul>
      <li>Identificar las tres variables (V, I, R)</li>
      <li>Aplicar la fórmula V = I × R</li>
      <li>Resolver problemas de circuitos simples</li>
    </ul>

    <RouterLink to="/contenidos" class="btn-comenzar">Comenzar</RouterLink>
  </section>
</template>

<script setup>
</script>

<style scoped>
.paso {
  padding: 2rem;
  min-height: 70vh;
}
.btn-comenzar {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: var(--color-primario);
  color: var(--color-fondo);
  border-radius: var(--radio-borde);
  text-decoration: none;
  font-weight: bold;
}
</style>
