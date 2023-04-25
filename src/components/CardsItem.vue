<template>
  <div :class="classes" @click="isActive = !isActive">
    <div :class="`${cardsItemClassName}__inner`">
      <parallax-item :active="!isActive">
        <div :class="`${cardsItemClassName}__content`">
          <div :class="`${cardsItemClassName}__text`">
            <span>?</span>
          </div>
        </div>
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
    width: 20rem;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.5) 0 3rem 6rem 0;
    border-radius: 1rem;
    border: 1px solid #f3f3f3;
    aspect-ratio: 3 / 4;
    position: relative;
    z-index: 1;
    transform-style: preserve-3d;
  }

  &__text {
    color: #c2c2c2;
    font-size: 17rem;
    line-height: 17rem;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  &_active {
    #{$selector}__inner {
      transform: rotateY(180deg);
      opacity: 0;
    }
  }
}
</style>
