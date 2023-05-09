<template>
  <div :class="logClassName">
    <div v-for="(log, index) in logs" :key="index" v-html="log" />
  </div>
</template>

<script setup lang="ts">
import { useGameStateStore } from "@/store/gameState";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { GameState } from "@/store/constants";

const logClassName = "log";

const state = useGameStateStore();

const { gameState, pickedDoor, doorsState, win } = storeToRefs(state);

const logs = computed(() => {
  const result = [];

  switch (gameState.value) {
    case GameState.pick: {
      result.push("Choose a prize door.");

      break;
    }
    case GameState.reveal: {
      let anotherDoor = 0;

      doorsState.value.forEach((item, index) => {
        if (index !== pickedDoor.value && !doorsState.value[index]) {
          anotherDoor = index;
        }
      });
      result.push(`You picked the door No. ${(pickedDoor.value || 0) + 1}.`);
      result.push(`Do you want to pick the door No. ${anotherDoor + 1}?`);

      break;
    }
    case GameState.gameOver: {
      result.push(win.value ? "You Win! Try again." : "You Loose! Try again.");

      break;
    }
  }

  return result;
});
</script>

<style scoped lang="scss">
@use "src/assets/styles/variables/breakpoints";

.log {
  font-size: 3.6rem;
  line-height: 4rem;
  font-weight: 700;

  @media (max-width: breakpoints.$mobile) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
}
</style>
