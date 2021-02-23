import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home/pages/Home.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () => import("@/pages/layouts/error/Error.vue"),
  },
  {
    path: "/proyectos",
    name: "Project",
    component: () => import("@/pages/Project/pages/Project.vue"),
  },
  {
    path: "/card-memory-match",
    name: "MemoryMatch",
    component: () =>
      import("@/pages/Project/pages/pages_projects/MemoryMatch.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
