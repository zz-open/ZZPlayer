<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style>
body {
  height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
