<template lang="pug">
include /src/assets/pug/index.pug
+b.NAV.nav
  +e.item
    +e.ROUTER-LINK.link(to="/") Home
  +e.item
    +e.ROUTER-LINK.link(to="/login") Login
router-view
</template>

<script>
export default {};
</script>
