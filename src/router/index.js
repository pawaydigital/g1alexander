import Vue from "vue";
import VueRouter from "vue-router";
import VueRouterMetaTags from "@bachdgvn/vue-router-meta-tags";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "home", webpackPreload: true */ "@/pages/Home/pages/Home.vue"
      ),
    meta: {
      title: `Alexander Granados`,
      metaTags: [
        {
          name: "description",
          content: `g1alexander - portafolio profesional de Alexander Granados.`,
        },
        {
          property: "og:description",
          content: `g1alexander - portafolio profesional de Alexander Granados.`,
        },
      ],
    },
  },
  {
    path: "/404",
    name: "Error",
    component: () =>
      import(
        /* webpackChunkName: "404", webpackPreload: true */ "@/pages/layouts/error/Error.vue"
      ),
    meta: {
      title: `Alexander Granados`,
      metaTags: [
        {
          name: "error",
          content: `g1alexander - pagina error 404 de Alexander Granados.`,
        },
        {
          property: "og:error",
          content: `g1alexander - pagina error 404 de Alexander Granados.`,
        },
      ],
    },
  },
  {
    path: "/proyectos",
    name: "Project",
    component: () =>
      import(
        /* webpackChunkName: "proyectos", webpackPreload: true */ "@/pages/Project/pages/Project.vue"
      ),
    meta: {
      title: `Alexander Granados`,
      metaTags: [
        {
          name: "proyectos",
          content: `g1alexander - pagina proyectos de Alexander Granados.`,
        },
        {
          property: "og:proyectos",
          content: `g1alexander - pagina proyectos de Alexander Granados.`,
        },
      ],
    },
  },
  {
    path: "/:slug",
    name: "Detail",
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "@/pages/Project/pages/Detail.vue"
      ),
    meta: {
      title: `Alexander Granados`,
      metaTags: [
        {
          name: "proyecto",
          content: `g1alexander - pagina proyecto individual de Alexander Granados.`,
        },
        {
          property: "og:proyecto",
          content: `g1alexander - pagina proyecto individual de Alexander Granados.`,
        },
      ],
    },
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

router.beforeEach(VueRouterMetaTags.update);

export default router;
