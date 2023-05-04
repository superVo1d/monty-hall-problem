<template>
  <div :class="layoutClassName">
    <div>
      <Header />
      <main>
        <Cards />
        <Log />
      </main>
    </div>
    <div>
      <Stats />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Stats from "@/components/Stats.vue";
import Log from "@/components/Log.vue";

const layoutClassName = "layout";
</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100%;
  width: 100%;

  & > div {
    height: 100%;
    padding: 3.2rem 1.6rem 4.8rem;

    &:last-child {
      border-left: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
