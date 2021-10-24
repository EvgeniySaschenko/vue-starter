<template lang="pug">
include /src/assets/pug/index.pug
.wrapper.container
  app-nav
</template>

<script>
import AppNav from "@/components/nav/nav.vue";

export default {
  components: {
    AppNav,
  },
};
</script>

<style lang="sass">
@import "@/assets/style/style.sass"
</style>
