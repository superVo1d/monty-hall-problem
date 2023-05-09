<template>
  <div :class="loaderClassName">
    <svg :class="`${loaderClassName}__icon`" height="200" width="200">
      <circle cx="100" cy="100" r="50"></circle>
    </svg>
  </div>
</template>

<script setup lang="ts">
const loaderClassName = "loader";
</script>

<style scoped lang="scss">
.loader {
  --radius: 50;
  --PI: 3.14159265358979;
  --circumference: calc(var(--PI) * var(--radius) * 1px);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  &__icon circle {
    stroke: #000;
    stroke-width: 1;
    fill: transparent;
    transform-origin: center;
    stroke-dasharray: var(--circumference);
    animation: spinner 2s ease-out infinite;
  }
}

@keyframes spinner {
  from {
    stroke-dashoffset: var(--circumference);
    transform: rotateZ(0deg);
  }
  to {
    stroke-dashoffset: calc(var(--circumference) * -1);
    transform: rotateZ(720deg);
  }
}
</style>
