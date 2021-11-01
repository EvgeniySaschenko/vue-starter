<template lang="pug">
include /src/assets/pug/index.pug
+b.page--home
  +e.H1.title Home page
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>
