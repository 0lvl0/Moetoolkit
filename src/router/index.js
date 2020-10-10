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
    path: "/release",
    name: "Release",
    // route level code-splitting
    // this generates a separate chunk (release.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "release" */ "../views/Release.vue"),
  },
  {
    path: "/beta",
    name: "Beta",
    // route level code-splitting
    // this generates a separate chunk (beta.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "beta" */ "../views/Beta.vue"),
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
