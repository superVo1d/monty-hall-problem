<template>
  <div :class="statsClassName">
    <ul>
      <li v-for="({ label, value }, index) in statsData" :key="index">
        <div>{{ label }}</div>
        <div>{{ value }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const statsClassName = "stats";

const statsData: { label: string; value: number }[] = [
  {
    label: "Try:",
    value: 12,
  },
  {
    label: "Won after switch ratio:",
    value: 60.3333,
  },
  {
    label: "Won with no switch ratio:",
    value: 29.6666,
  },
];
</script>

<style scoped lang="scss">
.stats {
  font-size: 3.6rem;
  line-height: 4rem;

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
