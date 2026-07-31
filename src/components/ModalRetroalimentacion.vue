<template>
  <Transition name="fade">
    <div v-if="visible" class="modal-overlay" @click.self="$emit('cerrar')">
      <div class="modal-caja" :class="correcto ? 'borde-exito' : 'borde-error'">
        <div class="modal-icono" :class="correcto ? 'icono-exito' : 'icono-error'">
          {{ correcto ? '✓' : '✕' }}
        </div>

        <h3 :class="correcto ? 'ok' : 'mal'">
          {{ correcto ? '¡Correcto!' : 'Incorrecto' }}
        </h3>

        <p v-if="correcto" class="modal-mensaje">
          Aplicaste bien la Ley de Ohm. ¡Vamos con el siguiente!
        </p>
        <div v-else class="modal-explicacion">
          <p class="modal-mensaje">El procedimiento correcto es:</p>
          <p class="modal-despeje dato-numerico">{{ explicacion.replace('El procedimiento correcto es: ', '') }}</p>
        </div>

        <button class="btn-cerrar" @click="$emit('cerrar')">Continuar</button>
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
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--espacio-md);
  z-index: 100;
}

.modal-caja {
  background: var(--color-fondo-suave);
  padding: var(--espacio-lg);
  border-radius: var(--radio-borde);
  max-width: 420px;
  width: 100%;
  text-align: center;
  border: 1px solid var(--color-borde);
}

.modal-caja.borde-exito {
  border-color: var(--color-exito);
  box-shadow: 0 0 24px rgba(124, 255, 107, 0.15);
}

.modal-caja.borde-error {
  border-color: var(--color-peligro);
  box-shadow: 0 0 24px rgba(255, 90, 60, 0.15);
}

.modal-icono {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0 auto var(--espacio-sm) auto;
}

.icono-exito {
  background: rgba(124, 255, 107, 0.15);
  color: var(--color-exito);
}

.icono-error {
  background: rgba(255, 90, 60, 0.15);
  color: var(--color-peligro);
}

.ok { color: var(--color-exito); }
.mal { color: var(--color-peligro); }

.modal-mensaje {
  color: var(--color-texto);
}

.modal-despeje {
  background: var(--color-fondo-elevado);
  border-radius: var(--radio-borde-sm);
  padding: 0.7rem;
  font-size: 1.05rem;
  color: var(--color-corriente);
  margin-top: var(--espacio-xs);
}

.btn-cerrar {
  margin-top: var(--espacio-md);
  padding: 0.6rem 1.5rem;
  border-radius: var(--radio-borde-sm);
  border: none;
  background: var(--color-cobre);
  color: var(--color-fondo);
  font-weight: 600;
  font-family: var(--fuente-titulo);
  transition: background var(--transicion-rapida);
}

.btn-cerrar:hover {
  background: var(--color-cobre-claro);
}

.fade-enter-active, .fade-leave-active { transition: opacity var(--transicion-media); }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>