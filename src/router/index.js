import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home/home.vue";
import VueCookies from "vue-cookies";
let isAuth = VueCookies.get("user");

let routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.vue"),
  },
];

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Если пользователь не авторизирован
// router.beforeEach((to, from, next) => {
//   if (!isAuth && to.name !== "Login") {
//     next({ path: "/login" });
//   } else {
//     next();
//   }
// });

export default router;
