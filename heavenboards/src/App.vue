<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AuthStatus from "@/components/AuthStatus.vue";
</script>

<template>
  <div>
    <AuthStatus />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
