import { createRouter, createWebHashHistory } from 'vue-router'
import IntroduccionView from '../views/IntroduccionView.vue'
import ContenidosView from '../views/ContenidosView.vue'
import ActividadesView from '../views/ActividadesView.vue'
import EvaluacionView from '../views/EvaluacionView.vue'

const routes = [
  { path: '/', redirect: '/introduccion' },
  {
    path: '/introduccion',
    name: 'introduccion',
    component: IntroduccionView,
    meta: { paso: 1, titulo: 'Introducción y Objetivos' }
  },
  {
    path: '/contenidos',
    name: 'contenidos',
    component: ContenidosView,
    meta: { paso: 2, titulo: 'Contenidos Multimediales' }
  },
  {
    path: '/actividades',
    name: 'actividades',
    component: ActividadesView,
    meta: { paso: 3, titulo: 'Actividades de Aprendizaje' }
  },
  {
    path: '/evaluacion',
    name: 'evaluacion',
    component: EvaluacionView,
    meta: { paso: 4, titulo: 'Evaluación' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
