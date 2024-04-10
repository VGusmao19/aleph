import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectionSortView from '../views/SelectionSortView.vue'
import BubbleSortView from '../views/BubbleSortView.vue'
import InsertionSortView from '../views/InsertionSortView.vue'
import BuscaLinearView from '../views/BuscaLinearView.vue'
import BuscaBinariaView from '../views/BuscaLinearView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SelectionSort',
    component: SelectionSortView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/BubbleSort',
    name: 'BubbleSort',
    component: BubbleSortView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/InsertionSort',
    name: 'InsertionSort',
    component: InsertionSortView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/BuscaLinear',
    name: 'BuscaLinear',
    component: BuscaLinearView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/BuscaBinaria',
    name: 'BuscaBinaria',
    component: BuscaBinariaView,
    meta: { transition: 'slide-left' },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
