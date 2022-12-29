import "pinia";

interface Fetch {
  (url: string, params?: RequestInit): Promise<Response>;
}

// Доступ к $fetch через this в компонетах
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $fetch: Fetch;
  }
}

// Доступ к $fetch через this в "pinia"
declare module "pinia" {
  interface PiniaCustomProperties {
    $fetch: Fetch;
  }
}

let defaultParams = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let $fetch: Fetch = function (url: string, params?: RequestInit): Promise<Response> {
  if (params && params.method !== "GET") {
    params = Object.assign(defaultParams, params);
  }
  return fetch(url, params);
};

export default {
  install: (app: any, options: any) => {
    app.config.globalProperties.$fetch = $fetch;
  },
};
