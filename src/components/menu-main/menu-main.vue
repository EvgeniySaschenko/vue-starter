<template lang="pug">
include /src/assets/pug/index.pug
el-menu(:default-active="$route.path", mode="horizontal")
  el-menu-item(:index="item.url", v-for="item in items")
    router-link.nav-link(:to="item.url") {{ item.name }}
</template>

<script lang="ts">
export default {
  name: "menu-main",
  data() {
    return {
      items: [
        { name: "Home", url: "/" },
        { name: "Login", url: "/login" },
      ],
    };
  },
};
</script>

<style lang="sass">
@import "@/assets/style/style.sass"
</style>
