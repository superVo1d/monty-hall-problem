<template>
  <header :class="headerClassName">
    <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank">
      <h1>Monty Hall Problem</h1>
    </a>
    <p>
      Suppose you're on a game show, and you're given the choice of three doors:
      Behind one door is a car; behind the others, goats.
    </p>
  </header>
</template>

<script setup lang="ts">
const headerClassName = "header";
</script>

<style scoped lang="scss">
.header {
  p {
    max-width: 95rem;
  }

  h1 {
    display: inline-block;

    &::after {
      content: "";
      background: url("/src/assets/media/wiki.svg") no-repeat center;
      background-size: contain;
      display: inline-block;
      position: relative;
      top: -0.3em;
      right: 0;
      margin: 0 0.1em;
      height: 0.6em;
      width: 0.5em;
    }
  }
}
</style>
