import { createApp } from "vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import { createI18n } from "vue-i18n";
import { VueCookieNext } from "vue-cookie-next";
import "vuetify/dist/vuetify.min.css";

createApp(App)
  .use(VueAxios, axios)
  .use(createI18n())
  .use(VueCookieNext)
  .use(store)
  .use(router)
  .mount("#app");
