import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const Type = () => import(/* webpackChunkName: "Type" */ "@/views/Type.vue");
const Class = () => import(/* webpackChunkName: "Class" */ "@/views/Class.vue");
const Interface = () =>
  import(/* webpackChunkName: "Interface" */ "@/views/Interface.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/type",
    name: "Type",
    component: Type
  },
  {
    path: "/class",
    name: "Class",
    component: Class
  },
  {
    path: "/interface",
    name: "Interface",
    component: Interface
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
