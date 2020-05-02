import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const Class = () => import(/* webpackChunkName: "Class" */ "@/views/Class.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/class",
    name: "Class",
    component: Class
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
