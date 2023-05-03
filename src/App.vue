<template>
  <main>
    <cards />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Cards from "@/components/Cards.vue";
import "./assets/styles/main.scss";
import Footer from "@/components/Footer.vue";

const log = () => console.log("click from App");
</script>

<style lang="scss">
#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  main {
    flex-grow: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
  }
}
</style>
