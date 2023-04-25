<template>
  <div :class="classes" @click="isActive = !isActive">
    <div :class="`${cardsItemClassName}__inner`">
      <parallax-item :active="!isActive">
        <div :class="`${cardsItemClassName}__content`" />
      </parallax-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ParallaxItem from "@/wrappers/ParallaxWrapper.vue";

const cardsItemClassName = "cards-item";

const isActive = ref<boolean>(false);

const classes = computed(() => [
  cardsItemClassName,
  {
    [`${cardsItemClassName}_active`]: isActive.value,
  },
]);
</script>

<style lang="scss" scoped>
.cards-item {
  $selector: &;

  -webkit-perspective: 150rem;
  cursor: pointer;
  perspective: 150rem;

  &__inner {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    transform-style: preserve-3d;
    opacity: 1;
  }

  &__content {
    width: 15rem;
    background: red;
    aspect-ratio: 3 / 4;
    transform-style: preserve-3d;
  }

  &_active {
    #{$selector}__inner {
      transform: rotateY(180deg);
      opacity: 0;
    }
  }
}
</style>
