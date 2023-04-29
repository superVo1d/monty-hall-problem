<template>
  <div :class="classes" @click="props.onClick">
    <div :class="`${cardsItemClassName}__inner`">
      <parallax-item :active="!props.active">
        <div :class="`${cardsItemClassName}__content`">
          <div :class="`${cardsItemClassName}__text`">
            <span>?</span>
          </div>
        </div>
      </parallax-item>
      <goat-scene :class="`${cardsItemClassName}__scene`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import GoatScene from "@/components/GoatScene.vue";
import ParallaxItem from "@/wrappers/ParallaxWrapper.vue";

const cardsItemClassName = "cards-item";

interface CardsItemInterface {
  active: boolean;
  onClick: () => void;
}

const props = defineProps<CardsItemInterface>();

const classes = computed(() => [
  cardsItemClassName,
  {
    [`${cardsItemClassName}_active`]: props.active,
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
    transform-style: preserve-3d;

    & > div {
      position: relative;
    }
  }

  &__content {
    width: 20rem;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 3rem 6rem 0;
    border-radius: 1rem;
    border: 1px solid #f3f3f3;
    aspect-ratio: 3 / 4;
    position: relative;
    z-index: 1;
    transform-style: preserve-3d;
    transition: all 0.6s;
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

  &__scene {
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
  }

  &_active {
    #{$selector}__content {
      transform: rotateY(360deg);
      opacity: 0;
      box-shadow: none;
    }
  }
}
</style>
