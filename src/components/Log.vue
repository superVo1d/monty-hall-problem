<template>
  <div :class="logClassName">
    <div>M: «Choose a prize door.»</div>
    <div>P: Picked the door No. 2</div>
    <div>M: «Do you want to pick door No. 1?»</div>
    <div>P: Yes/No [Y/N]</div>
  </div>
</template>

<script setup lang="ts">
const logClassName = "log";
</script>

<style scoped lang="scss">
.log {
  font-size: 3.6rem;
  line-height: 4rem;
  font-weight: 700;
}
</style>
