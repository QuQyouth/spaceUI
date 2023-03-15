import { createRouter, createWebHashHistory} from 'vue-router'
import Markdown from '../components/Markdown.vue'
import HomeView from '../views/HomeView.vue'
import DocView from '../views/DocView.vue'
import Switch from '../components/SwitchComponent.vue'
import Button from '../components/ButtonComponent.vue'
import Dialog from '../components/DialogComponent.vue'
import Tabs from '../components/TabsComponent.vue'
import Start from '../components/Start.vue'
import Checkbox from '../components/CheckboxComponent.vue'

import Intro from '@/markdown/intro.md'
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
        {path: '', name: 'intro', component: Markdown, props:{content: Intro}},
        {path: 'start', component: Start},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'tabs', component: Tabs},
        {path: 'checkbox', component: Checkbox},
      ]
    }
  ]
})

export default router
