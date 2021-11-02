<template lang="pug">
include /src/assets/pug/index.pug
.wrapper.container
  app-svg-symbol
  app-nav
  +svg-symbol('vue-comments-symbol-icon-image', 'cls')
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppNav from "@/components/nav/nav.vue";
import AppSvgSymbol from "@/components/svg-symbol/svg-symbol.vue";

@Options({
  components: {
    AppNav,
    AppSvgSymbol,
  },
})
export default class App extends Vue {
  add(): void {
    console.log(11);
  }
}
</script>

<style lang="sass">
@import "@/assets/style/style.sass"
</style>
