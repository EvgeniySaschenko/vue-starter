<template lang="pug">
include /src/assets/pug/index.pug
+b.page--login
  +e.H1.title Login page
  +e.description The router redirects the user to the login page. Because the user does not have a cookie named "user" installed.
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Login extends Vue {}
</script>
