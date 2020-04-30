import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const Easy = () => import(/* webpackChunkName: "Easy" */ "@/views/Easy.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/easy",
    name: "Easy",
    component: Easy
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
