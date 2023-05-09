<template>
  <div :class="statsClassName">
    <ul>
      <li v-for="({ label, value }, index) in statsData" :key="index">
        <div>{{ label }}</div>
        <div>{{ formatFloat(value) }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatFloat } from "@/helpers";

const statsClassName = "stats";

import { useGameStateStore } from "@/store/gameState";

const state = useGameStateStore();

const statsData = computed(() => [
  {
    label: "Try:",
    value: state.getTotalsPlays,
  },
  {
    label: "Won after switch:",
    value: state.totalSwitchWins / state.totalSwitchPlays,
  },
  {
    label: "Won after stay:",
    value: state.totalStayWins / state.totalStayPlays,
  },
]);
</script>

<style scoped lang="scss">
@use "src/assets/styles/variables/breakpoints";

.stats {
  font-size: 3.6rem;
  line-height: 4rem;

  @media (max-width: breakpoints.$mobile) {
    font-size: 2.4rem;
    line-height: 3rem;
  }

  li,
  ul {
    list-style: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  li > div:last-child {
    font-weight: 700;
    margin-top: 0.8rem;
  }
}
</style>
