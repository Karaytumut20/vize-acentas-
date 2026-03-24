<template>
  <div class="layout-wrapper relative w-full pt-safe-top pb-safe-bottom">
    <Navbar />

    <main class="page-content min-h-screen">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
// Simple static layout
</script>

<style scoped>
</style>
