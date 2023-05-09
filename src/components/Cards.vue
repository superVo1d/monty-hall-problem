<template>
  <ModelProvider>
    <div :class="classes">
      <cards-item
        v-for="(item, index) in state.doorsState"
        :key="index"
        :active="item"
        :on-click="() => state.pickDoor(index)"
        :picked="index === state.pickedDoor"
        :prize="index === state.prizeDoor"
      />
    </div>
  </ModelProvider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CardsItem from "@/components/CardsItem.vue";
import { useGameStateStore } from "@/store/gameState";
import ModelProvider from "@/components/providers/ModelProvider.vue";

const state = useGameStateStore();

const cardsClassName = "cards";

const classes = computed(() => [cardsClassName]);
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  display: flex;
  gap: 2rem;
  margin: 4.8rem 0;
}
</style>
