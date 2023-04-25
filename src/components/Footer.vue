<template>
  <footer>
    <div>© {{ year }} г.</div>
    <div><a href="https://vk.com/newcyberrussia">«русский киберслон»</a></div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const year = computed(() => new Date().getFullYear());
</script>

<style scoped></style>
