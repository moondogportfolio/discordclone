import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      // default: () => import('src/pages/FirebasePage.vue'),
      default: () => import('pages/IndexPage.vue'),
    },
    children: [
      {
        path: 'template',
        component: () => import('components/toolbarTemplate/toolbarRoot.vue'),
      },
      {
        path: 'graph',
        component: () => import('components/toolbar/toolbarRoot.vue'),
      },
    ],
  },
  {
    path: '/profile',
    component: () => import('src/pages/ProfilePage.vue'),
  },
  {
    path: '/new',
    component: () => import('src/pages/newGraph.vue'),
  },
  {
    path: '/explore',
    components: {
      default: () => import('src/pages/explorePage.vue'),
    },
  },
  {
    path: '/starred',
    components: {
      default: () => import('src/pages/starredPage.vue'),
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
