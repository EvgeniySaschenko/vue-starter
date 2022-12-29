<template lang="pug">
include /lib.pug
+b.FOOTER.footer
  .container
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-footer",
});
</script>

<style scoped lang="sass">
.footer
  min-height: 80px
  background: red
</style>
