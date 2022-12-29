<template lang="pug">
include /lib.pug
+b.HEADER.header
  .container
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-header",
});
</script>

<style scoped lang="sass">
.header
  min-height: 80px
  background: red
</style>
