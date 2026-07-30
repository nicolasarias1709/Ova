<template>
  <div class="ejercicio" :class="{ resuelto: yaResuelto }">
    <div class="ejercicio-encabezado">
      <span class="ejercicio-numero">{{ numero }}</span>
      <p class="ejercicio-enunciado">{{ enunciado }}</p>
    </div>

    <div class="ejercicio-input-fila">
      <input
        type="text"
        inputmode="decimal"
        v-model="respuestaTexto"
        @input="validar"
        :placeholder="`Respuesta en ${unidad}`"
        class="ejercicio-input"
        :class="{ 'input-error': error }"
        :disabled="yaResuelto"
      />
      <button
        class="btn-comprobar"
        @click="enviar"
        :disabled="!respuestaTexto || !!error || yaResuelto"
      >
        {{ yaResuelto ? 'Resuelto ✓' : 'Comprobar' }}
      </button>
    </div>

    <p v-if="error" class="mensaje-error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  numero: { type: Number, default: 1 },
  enunciado: { type: String, default: '' },
  unidad: { type: String, default: '' }
})
const emit = defineEmits(['enviar'])

const respuestaTexto = ref('')
const error = ref('')
const yaResuelto = ref(false)

const patronNumeroValido = /^-?\d*\.?\d*$/

function validar() {
  if (respuestaTexto.value === '') {
    error.value = ''
    return
  }
  if (!patronNumeroValido.test(respuestaTexto.value)) {
    error.value = 'Solo se permiten números (usa punto para decimales, ej: 4.5)'
    respuestaTexto.value = respuestaTexto.value.slice(0, -1)
    return
  }
  error.value = ''
}

function enviar() {
  validar()
  if (error.value || respuestaTexto.value === '') return
  yaResuelto.value = true
  emit('enviar', Number(respuestaTexto.value))
}
</script>

<style scoped>
.ejercicio {
  background: var(--color-fondo-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio-borde);
  padding: var(--espacio-md);
  margin-bottom: var(--espacio-sm);
  transition: border-color var(--transicion-media);
}

.ejercicio.resuelto {
  border-color: var(--color-exito);
}

.ejercicio-encabezado {
  display: flex;
  gap: var(--espacio-sm);
  align-items: flex-start;
  margin-bottom: var(--espacio-sm);
}

.ejercicio-numero {
  font-family: var(--fuente-datos);
  color: var(--color-cobre);
  font-weight: 600;
  flex-shrink: 0;
}

.ejercicio-enunciado {
  margin: 0;
  color: var(--color-texto);
}

.ejercicio-input-fila {
  display: flex;
  gap: var(--espacio-xs);
  flex-wrap: wrap;
}

.ejercicio-input {
  flex: 1;
  min-width: 140px;
  padding: 0.6rem 0.8rem;
  border-radius: var(--radio-borde-sm);
  border: 1px solid var(--color-borde);
  background: var(--color-fondo);
  color: var(--color-texto);
  font-family: var(--fuente-datos);
}

.ejercicio-input:focus {
  border-color: var(--color-corriente);
  outline: none;
}

.ejercicio-input.input-error {
  border-color: var(--color-peligro);
}

.btn-comprobar {
  padding: 0.6rem 1.2rem;
  border-radius: var(--radio-borde-sm);
  border: none;
  background: var(--color-cobre);
  color: var(--color-fondo);
  font-weight: 600;
  font-family: var(--fuente-titulo);
  transition: background var(--transicion-rapida);
}

.btn-comprobar:hover:not(:disabled) {
  background: var(--color-cobre-claro);
}

.btn-comprobar:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.mensaje-error {
  color: var(--color-peligro);
  font-size: 0.85rem;
  margin: 0.5rem 0 0 0;
}
</style>