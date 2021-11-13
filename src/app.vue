<template lang="pug">
include /src/assets/pug/index.pug
.wrapper
  app-svg-symbol
  .container
    el-header
      menu-main
    el-footer
    router-view
</template>

<script>
import AppSvgSymbol from "@/components/svg-symbol/svg-symbol.vue";
import MenuMain from "@/components/menu-main/menu-main.vue";

export default {
  components: {
    AppSvgSymbol,
    MenuMain,
  },
};
</script>

<style lang="sass">
@import "@/assets/style/_style.sass"
</style>
