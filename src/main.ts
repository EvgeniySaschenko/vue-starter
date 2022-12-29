import { createApp } from "vue";
import App from "./App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import { createPinia } from "pinia";

// plugins
import pluginElementPlus from "@/plugins/element-plus";
import pluginApi, { $api, $fetch } from "@/plugins/api";

let pinia = createPinia();

pinia.use(({ store }) => {
  store.$fetch = $fetch;
  store.$api = $api;
});

let app = createApp(App).use(pluginElementPlus).use(pluginApi).use(router).use(pinia).mount("#app");
