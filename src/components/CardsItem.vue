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
      <scene
        v-if="props.active"
        :class="`${cardsItemClassName}__scene`"
        :type="props.prize ? SceneType.car : SceneType.goat"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Scene from "@/components/Scene.vue";
import { SceneType } from "@/types";
import ParallaxItem from "@/wrappers/ParallaxWrapper.vue";

const cardsItemClassName = "cards-item";

interface CardsItemInterface {
  active: boolean;
  onClick: () => void;
  picked: boolean;
  prize: boolean;
}

const props = defineProps<CardsItemInterface>();

const classes = computed(() => [
  cardsItemClassName,
  {
    [`${cardsItemClassName}_active`]: props.active,
    [`${cardsItemClassName}_picked`]: props.picked,
  },
]);
</script>

<style lang="scss" scoped>
@use "src/assets/styles/variables/breakpoints";
@use "src/assets/styles/variables/colors";

.cards-item {
  $selector: &;

  -webkit-perspective: 300rem;
  cursor: pointer;
  flex-grow: 1;
  max-width: calc(25% - 3rem);
  perspective: 300rem;

  @media (max-width: breakpoints.$breakpoint-sm) {
    max-width: unset;
  }

  &__inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    pointer-events: none;

    & > div:first-child {
      position: relative;
    }
  }

  &__content {
    width: 100%;
    border: 1px solid #000;
    aspect-ratio: 3 / 4;
    position: relative;
    z-index: 1;
    transform-style: preserve-3d;
    transition: transform 0.6s ease, opacity 0.6s ease;
  }

  &__text {
    color: colors.$spring-bud;
    font-size: 13vw;
    line-height: 13vw;
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
      border: none;
      box-shadow: none;
    }
  }

  &:hover:not(#{$selector}_active):not(#{$selector}_picked) {
    @media (hover: hover) {
      #{$selector}__content {
        border-color: transparent;
        outline: max(1vw, 5px) dashed colors.$spring-bud;
      }
    }
  }

  &_picked {
    #{$selector}__content {
      border-color: transparent;
      outline: max(1vw, 5px) solid colors.$spring-bud;
      width: 100%;
    }
  }
}
</style>
