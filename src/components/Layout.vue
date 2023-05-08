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
  min-height: 100%;
  transition: background 0.6s ease;
  width: 100%;

  @media (max-width: breakpoints.$breakpoint-sm) {
    display: block;
  }

  & > div {
    height: 100%;
    padding: 3.2rem 1.6rem 4.8rem;

    &:first-child {
      min-height: 80vh;
    }

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
