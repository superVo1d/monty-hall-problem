<template>
  <footer :class="classes">
    <div>© {{ year }} г.</div>
    <div><a href="https://vk.com/newcyberrussia">«русский киберслон»</a></div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const footerClassName = "footer";

const year = computed(() => new Date().getFullYear());

const classes = computed(() => [footerClassName]);
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  padding: 3rem 0;
}
</style>
