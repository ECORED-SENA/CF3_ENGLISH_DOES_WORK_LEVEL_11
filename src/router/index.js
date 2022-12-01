import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../../node_modules/ecored-base-pkg/src/views/Inicio.vue'
import Curso from '../../node_modules/ecored-base-pkg/src/views/Curso.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/introduccion',
      name: 'introduccion',
      component: () =>
        import(/* webpackChunkName: "intro" */ '../views/Introduccion.vue'),
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      redirect: {
        name: 'tema1',
      },
      children: [
        {
          path: 'tema1',
          name: 'tema1',
          component: () =>
            import(/* webpackChunkName: "tema1" */ '../views/Tema1.vue'),
        },
        {
          path: 'tema2',
          name: 'tema2',
          component: () =>
            import(/* webpackChunkName: "tema2" */ '../views/Tema2.vue'),
        },
        {
          path: 'tema3',
          name: 'tema3',
          component: () =>
            import(/* webpackChunkName: "tema3" */ '../views/Tema3.vue'),
        },
      ],
    },
    {
      path: '/actividad',
      name: 'actividad',
      component: () =>
        import(/* webpackChunkName: "actividad" */ '../views/Actividad.vue'),
    },
    {
      path: '/glosario',
      name: 'glosario',
      component: () =>
        import(
          /* webpackChunkName: "glosario" */ '../../node_modules/ecored-base-pkg/src/views/Glosario.vue'
        ),
    },
    {
      path: '/complementario',
      name: 'complementario',
      component: () =>
        import(
          /* webpackChunkName: "comple" */ '../../node_modules/ecored-base-pkg/src/views/Complementario.vue'
        ),
    },
    {
      path: '/referencias',
      name: 'referencias',
      component: () =>
        import(
          /* webpackChunkName: "referencias" */ '../../node_modules/ecored-base-pkg/src/views/Referencias.vue'
        ),
    },
    {
      path: '/sintesis',
      name: 'sintesis',
      component: () =>
        import(/* webpackChunkName: "sintesis" */ '../views/sintesis.vue'),
    },
    {
      path: '/creditos',
      name: 'creditos',
      component: () =>
        import(
          /* webpackChunkName: "creditos" */ '../../node_modules/ecored-base-pkg/src/views/Creditos.vue'
        ),
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      const newRoute = {
        selector: to.hash,
        offset: { y: 100 },
        behavior: 'smooth',
      }
      if (to.name === from.name) {
        return newRoute
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(newRoute)
          }, 500)
        })
      }
    } else {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto',
        })
      }, 100)
    }
  },
})

export default router
