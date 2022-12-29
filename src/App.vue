<template lang="pug">
include /lib.pug
.wrapper
  app-header
  router-view
  app-footer
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

<style lang="sass">
@import "@/assets/style/_style.sass"
.wrapper
  margin: 0 auto
  position: relative
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
