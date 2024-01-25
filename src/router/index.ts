import { createRouter, createWebHistory } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'
import AboutView from '../views/AboutView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import UsesView from '../views/UsesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView,
      meta: {
        title: 'About Me'
      },
      children: [
        {
          path: 'about',
          name: 'about',
          component: AboutView,
          meta: {
            title: 'About Me'
          }
        },
        {
          path: 'portfolio',
          name: 'portfolio',
          component: PortfolioView,
          meta: {
            title: 'Portfolio'
          }
        },
        {
          path: 'articles',
          name: 'articles',
          component: ArticlesView,
          meta: {
            title: 'Articles'
          }
        },
        {
          path: 'uses',
          name: 'uses',
          component: UsesView,
          meta: {
            title: 'Hardware & Software Stack'
          }
        }
      ]
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: 'Portfolio'
      }
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView,
      meta: {
        title: 'Articles'
      }
    },
    {
      path: '/uses',
      name: 'uses',
      component: UsesView,
      meta: {
        title: 'Hardware & Software Stack'
      }
    }
  ]
})

export default router
