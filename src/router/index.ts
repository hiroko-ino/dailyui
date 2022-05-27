import { createRouter, createWebHistory } from 'vue-router'
import { pages } from '../challenges';
import Index from '../Index.vue'

const routes: {
  path: string,
  component: any,
  name: string
}[] = []

Object.keys(pages).forEach((key) => {
  routes.push({
    path: `/challenge/${pages[key].index}`,
    component: () => import(`../challenges/Challenge${pages[key].index}.vue`),
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
