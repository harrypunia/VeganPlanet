<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "Grid",
    props: ["column", "center"]
  }
</script>

<style lang="scss" scoped>@import "../resources/css/components/grid";</style>