import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import $storeUser from "@/store/user";

let routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: import("@/views/login/login.vue"),
  },
];

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  let $store = $storeUser();
  $store.checkAuth();
  return true;
});

export default router;
