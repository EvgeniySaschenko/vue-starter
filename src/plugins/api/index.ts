import { $fetch, FetchType } from "./_core";
import user from "./user";

export let $api = {
  user,
};

export { $fetch };

// Доступ к $api через this в компонетах
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: typeof $api;
  }
}

// Доступ к $fetch через this в компонетах
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $fetch: FetchType;
  }
}

// Доступ к $fetch через this в "pinia"
declare module "pinia" {
  interface PiniaCustomProperties {
    $fetch: FetchType;
  }
}

export default {
  install: (app: any, options: any) => {
    app.config.globalProperties.$fetch = $fetch;
    app.config.globalProperties.$api = $api;
  },
};
