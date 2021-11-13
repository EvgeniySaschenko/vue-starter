<template lang="pug">
include /src/assets/pug/index.pug
+b.EL-MENU.menu-main(:default-active="$route.path", mode="horizontal")
  +e.EL-MENU-ITEM.item(:index="item.url", v-for="item in items")
    +e.ROUTER-LINK.link(:to="item.url") {{ item.name }}
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
.menu-main
  &__item
    padding: 0 !important
  &__link
    height: 100%
    display: block
    padding: 0 20px
</style>
