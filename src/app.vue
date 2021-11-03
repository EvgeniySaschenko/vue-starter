<template lang="pug">
include /src/assets/pug/index.pug
.wrapper.container
  app-svg-symbol
  app-nav
</template>

<script>
import AppNav from "@/components/nav/nav.vue";
import AppSvgSymbol from "@/components/svg-symbol/svg-symbol.vue";

export default {
  components: {
    AppNav,
    AppSvgSymbol,
  },
};
</script>

<style lang="sass">
@import "@/assets/style/style.sass"
</style>
