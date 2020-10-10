import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/released",
    name: "ReleasedTools",
    // route level code-splitting
    // this generates a separate chunk (ReleasedTools.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ReleasedTools" */ "../views/ReleasedTools.vue"
      ),
  },
  {
    path: "/beta",
    name: "BetaTools",
    // route level code-splitting
    // this generates a separate chunk (BetaTools.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "BetaTools" */ "../views/BetaTools.vue"),
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
