
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index') },
      { path: 'redeem', component: () => import('pages/Redeem') },
      { path: 'cards', component: () => import('pages/Cards') },
      { path: 'preferences', component: () => import('pages/Preferences') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
