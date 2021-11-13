import { createApp } from "vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import { VueCookieNext } from "vue-cookie-next";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App)
  .use(VueAxios, axios)
  .use(ElementPlus)
  .use(VueCookieNext)
  .use(store)
  .use(router)
  .mount("#app");
