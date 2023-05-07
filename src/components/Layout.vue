<template>
  <div :class="classNames">
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
import { useGameStateStore } from "@/store/gameState";
import { GameState } from "@/store/constants";
import { computed } from "vue";

const state = useGameStateStore();

const layoutClassName = "layout";

const classNames = computed(() => [
  layoutClassName,
  {
    [`${layoutClassName}_win`]:
      state.gameState === GameState.gameOver && state.win,
    [`${layoutClassName}_loose`]:
      state.gameState === GameState.gameOver && !state.win,
  },
]);
</script>

<style scoped lang="scss">
@use "src/assets/styles/variables/breakpoints";
@use "src/assets/styles/variables/colors";

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100%;
  width: 100%;

  @media (max-width: breakpoints.$breakpoint-sm) {
    grid-template-columns: 1fr;
  }

  & > div {
    height: 100%;
    padding: 3.2rem 1.6rem 4.8rem;

    &:last-child {
      border-left: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: breakpoints.$breakpoint-sm) {
        border-left: none;
        border-top: 1px solid #000;
      }
    }
  }

  &_win {
    background: colors.$spring-bud;
  }

  &_loose {
    background: colors.$coral-orange;
  }
}
</style>
