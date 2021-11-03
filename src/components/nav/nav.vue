<template lang="pug">
include /src/assets/pug/index.pug
.navbar.navbar-expand-lg.navbar-light.bg-lightc
  .navbar-nav
    .nav-item
      router-link.nav-link(to="/") Home
    .nav-item
      router-link.nav-link(to="/login") Login
router-view
</template>

<script>
export default {};
</script>
