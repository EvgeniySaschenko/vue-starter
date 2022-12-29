export interface FetchType {
  (url: string, params?: RequestInit): Promise<Response>;
}

let defaultParams = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let $fetch: FetchType = function (url: string, params?: RequestInit): Promise<Response> {
  if (params && params.method !== "GET") {
    params = Object.assign(defaultParams, params);
  }
  return fetch(url, params);
};
