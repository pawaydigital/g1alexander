import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "home", webpackPreload: true */ "@/pages/Home/pages/Home.vue"
      ),
  },
  {
    path: "/404",
    name: "Error",
    component: () =>
      import(
        /* webpackChunkName: "404", webpackPreload: true */ "@/pages/layouts/error/Error.vue"
      ),
  },
  {
    path: "/proyectos",
    name: "Project",
    component: () =>
      import(
        /* webpackChunkName: "proyectos", webpackPreload: true */ "@/pages/Project/pages/Project.vue"
      ),
  },
  {
    path: "/:slug",
    name: "Detail",
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "@/pages/Project/pages/Detail.vue"
      ),
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
