import { createRouter, createWebHistory } from 'vue-router'
import { pages } from '../challenges';
import Index from '../Index.vue'

const routes: {
  path: string,
  component: any,
  name: string
}[] = []

pages.forEach((value, key) => {
  routes.push({
    path: `/challenge/${value.index}`,
    component: () => import(`../challenges/Challenge${value.index}.vue`),
    name: key
  })
})

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      name: 'Home'
    },
    ...routes
  ]
})
