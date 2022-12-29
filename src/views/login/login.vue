<template lang="pug">
include /lib.pug
+b.page.container
  +e.box login
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "page-login",
});
</script>

<style lang="sass" scoped>
.page
  min-height: 100%
  display: flex
  align-items: center
  justify-content: center
  &__box-auth
    text-align: center
    width: 100%
    max-width: 400px
</style>
