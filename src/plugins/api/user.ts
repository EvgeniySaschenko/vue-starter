import { $fetch } from "./_core";

type RegParamsType = {
  mail: string;
  name: string;
};

export default {
  // Зарегистрироватся
  registrationUser: async (params: RegParamsType) => {
    return await $fetch("/user/registration", {
      method: "POST",
      body: JSON.stringify(params),
    });
  },

  // Войти
  authUser: async (mail: string) => {
    return await $fetch("/user/auth", {
      method: "POST",
      body: JSON.stringify({ mail }),
    });
  },
};
