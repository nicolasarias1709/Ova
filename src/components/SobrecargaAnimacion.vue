<template>
  <Transition name="sobrecarga-fade">
    <div v-if="activa" class="sobrecarga">
      <svg viewBox="0 0 60 60" class="sobrecarga-icono">
        <polygon points="34,4 14,34 26,34 22,56 46,26 32,26" class="rayo" />
        <circle cx="18" cy="46" r="5" class="humo humo-1" />
        <circle cx="24" cy="50" r="4" class="humo humo-2" />
        <circle cx="14" cy="52" r="3.5" class="humo humo-3" />
      </svg>
      <div class="sobrecarga-texto">
        <strong>¡Sobrecarga!</strong>
        <p>El voltaje superó la tolerancia del componente. En la realidad, esto puede fundir el bombillo o dañar la resistencia.</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  activa: { type: Boolean, default: false }
})
</script>

<style scoped>
.sobrecarga {
  display: flex;
  align-items: center;
  gap: var(--espacio-sm);
  background: rgba(255, 90, 60, 0.12);
  border: 1px solid var(--color-peligro);
  border-radius: var(--radio-borde);
  padding: var(--espacio-sm) var(--espacio-md);
  margin: var(--espacio-md) 0;
}

.sobrecarga-icono {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.rayo {
  fill: var(--color-peligro);
  animation: parpadeoRayo 0.5s infinite alternate;
}

.humo {
  fill: var(--color-texto-suave);
  opacity: 0.5;
  animation: subirHumo 1.6s ease-in infinite;
}

.humo-1 { animation-delay: 0s; }
.humo-2 { animation-delay: 0.4s; }
.humo-3 { animation-delay: 0.8s; }

.sobrecarga-texto strong {
  color: var(--color-peligro);
  font-family: var(--fuente-titulo);
}

.sobrecarga-texto p {
  margin: 0.2rem 0 0 0;
  font-size: 0.9rem;
}

@keyframes parpadeoRayo {
  from { opacity: 1; }
  to { opacity: 0.5; }
}

@keyframes subirHumo {
  0% { transform: translateY(0) scale(1); opacity: 0.5; }
  100% { transform: translateY(-24px) scale(1.6); opacity: 0; }
}

.sobrecarga-fade-enter-active,
.sobrecarga-fade-leave-active {
  transition: opacity var(--transicion-media);
}
.sobrecarga-fade-enter-from,
.sobrecarga-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .rayo, .humo {
    animation: none;
  }
}
</style>