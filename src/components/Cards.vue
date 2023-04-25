<template>
  <div :class="classes">
    <cards-item v-for="(item, index) in new Array(count)" :key="index" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CardsItem from "@/components/CardsItem.vue";

const cardsClassName = "cards";

const classes = computed(() => [cardsClassName]);

const count = 3;
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px;
}
</style>
