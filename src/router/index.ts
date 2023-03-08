import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocView from '../views/DocView.vue'
import Switch from '../components/Switch.vue'
import Button from '../components/Button.vue'
import Dialog from '../components/Dialog.vue'
import Tabs from '../components/Tabs.vue'
import Start from '../components/Start.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/doc',
      name: 'doc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/DocView.vue')
      component: DocView,
      children: [
        {path: '', component: Start},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'tabs', component: Tabs},
      ]
    }
  ]
})

export default router
