<template>
  <div class="ejercicio">
    <p>{{ enunciado }}</p>
    <input
      type="text"
      v-model="respuesta"
      @input="validar"
      placeholder="Escribe tu respuesta"
    />
    <p v-if="error" class="error">{{ error }}</p>
    <button @click="enviar">Comprobar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  enunciado: { type: String, default: 'Enunciado del ejercicio' }
})
const emit = defineEmits(['enviar'])

const respuesta = ref('')
const error = ref('')

function validar() {
  if (respuesta.value && isNaN(Number(respuesta.value))) {
    error.value = 'Solo se permiten números'
  } else {
    error.value = ''
  }
}

function enviar() {
  validar()
  if (!error.value) {
    emit('enviar', Number(respuesta.value))
  }
}
</script>

<style scoped>
.error {
  color: var(--color-peligro);
  font-size: 0.9rem;
}
</style>
