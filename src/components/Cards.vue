<template>
  <div :class="classes">
    <cards-item
      v-for="(item, index) in cardsState"
      :key="index"
      :active="item"
      :on-click="() => changeState(index)"
      :prize="index === prizeIndex"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CardsItem from "@/components/CardsItem.vue";
import { useMemoryRef } from "@/hooks/useMemoryRef";

const cardsClassName = "cards";

const count = 3;

const prizeIndex = computed(() => Math.floor((Math.random() * count) % count));

//const cardsState = useMemoryRef(cardsClassName, new Array(count).fill(false));
const cardsState = ref(new Array(count).fill(false));

const changeState = (index: number) => {
  cardsState.value[index] = !cardsState.value[index];
};

const classes = computed(() => [cardsClassName]);
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 5rem;
}
</style>
