import { createApp } from "vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import VueCookies from "vue-cookies";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createI18n } from "vue-i18n";

// i18n
let i18n = createI18n({
  locale: "ru",
  silentTranslationWarn: true,
});

createApp(App)
  .use(i18n)
  .use(VueAxios, axios)
  .use(ElementPlus)
  .use(VueCookies)
  .use(store)
  .use(router)
  .mount("#app");
