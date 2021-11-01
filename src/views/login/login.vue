<template lang="pug">
include /src/assets/pug/index.pug
+b.page--login
  +e.H1.title Login page
  +e.description The router redirects the user to the Login page if the user does not have a cookie User
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Login extends Vue {}
</script>
