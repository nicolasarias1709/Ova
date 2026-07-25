<template>
  <Transition name="fade">
    <div v-if="visible" class="modal-overlay" @click.self="$emit('cerrar')">
      <div class="modal-caja">
        <h3 :class="correcto ? 'ok' : 'mal'">
          {{ correcto ? '¡Correcto! ✅' : 'Incorrecto ❌' }}
        </h3>
        <p v-if="!correcto">{{ explicacion }}</p>
        <button @click="$emit('cerrar')">Cerrar</button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  visible: { type: Boolean, default: false },
  correcto: { type: Boolean, default: false },
  explicacion: { type: String, default: '' }
})
defineEmits(['cerrar'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-caja {
  background: var(--color-fondo-suave);
  padding: 2rem;
  border-radius: var(--radio-borde);
  max-width: 400px;
  text-align: center;
}
.ok { color: var(--color-exito); }
.mal { color: var(--color-peligro); }

.fade-enter-active, .fade-leave-active { transition: opacity var(--transicion-media); }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
