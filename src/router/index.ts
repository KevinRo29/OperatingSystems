import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/OperatingSystemsView.vue')
      },
      {
        path: 'macos',
        component: () => import('@/views/MacOsView.vue')
      },
      {
        path: 'windowsdesktop',
        component: () => import('@/views/WindowsView.vue')
      },

      {
        path: 'windowsphone',
        component: () => import('@/views/WindowsMobileView.vue')
      },
      {
        path: 'linux',
        component: () => import('@/views/LinuxView.vue')
      },
      {
        path: 'android',
        component: () => import('@/views/AndroidView.vue')
      },
      {
        path: 'ios',
        component: () => import('@/views/iOSView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
