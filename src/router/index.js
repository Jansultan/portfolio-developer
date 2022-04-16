import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../views/Education.vue"),
  },
  {
    path: "/portfolios",
    name: "portfolios",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
