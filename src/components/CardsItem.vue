<template>
  <div :class="classes" @click="props.onClick">
    <div :class="`${cardsItemClassName}__inner`">
      <div :class="`${cardsItemClassName}__parallax-item-wrapper`">
        <parallax-item :active="!props.active">
          <div :class="`${cardsItemClassName}__content`">
            <div :class="`${cardsItemClassName}__text`">
              <span>?</span>
            </div>
          </div>
        </parallax-item>
      </div>
      <Loader
        v-show="props.active && !injectedModels.isLoaded.value"
        :class="`${cardsItemClassName}__loader`"
      />
      <scene
        :visible="props.active"
        :class="`${cardsItemClassName}__scene`"
        :type="props.prize ? SceneType.car : SceneType.goat"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import Scene from "@/components/Scene.vue";
import { ModelProviderInjectionInterface, SceneType } from "@/types";
import ParallaxItem from "@/components/wrappers/ParallaxWrapper.vue";
import Loader from "@/components/Loader.vue";
import { modelInjectionKey } from "@/components/providers/injectionKeys";

const cardsItemClassName = "cards-item";

const injectedModels = inject(
  modelInjectionKey
) as ModelProviderInjectionInterface;

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

  &__parallax-item-wrapper {
    transition: transform 0.6s ease;
    -webkit-perspective: 1000px;
    perspective: 1000px;
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

    @media (max-width: breakpoints.$breakpoint-sm) {
      font-size: 22vw;
      line-height: 22vw;
    }
  }

  &__scene {
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
  }

  &_active {
    #{$selector}__parallax-item-wrapper {
      transform: perspective(1000px) rotateY(360deg);
    }

    #{$selector}__content {
      opacity: 0;
      border: none;
      box-shadow: none;
    }
  }

  &:hover:not(#{$selector}_active):not(#{$selector}_picked) {
    @media (hover: hover) {
      #{$selector}__content {
        border-color: transparent;
        outline: max(0.5vw, 5px) dashed colors.$spring-bud;
      }
    }
  }

  &_picked #{$selector}__content {
    border-color: transparent;
    outline: max(0.5vw, 5px) solid colors.$spring-bud;
    width: 100%;
  }
}
</style>
