import { defineStore } from "pinia";
import { $cookies } from "@/plugins/cookies";

export default defineStore("user", {
  state: () => ({
    mail: "",
    name: "",
  }),
  actions: {
    // Перенаправление на страницу логин
    redorectToPageLogin() {
      let pathExclude = {
        "/login": true,
        "/login/": true,
      };

      if (!(window.location.pathname in pathExclude)) {
        window.location.href = "/login";
      }
    },
    // Проверка автроризации пользователя
    checkAuth() {
      let isLogin = $cookies.get("user");
      if (isLogin) return;
      this.redorectToPageLogin();
    },
  },
});
