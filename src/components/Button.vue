<template>
  <parallax-wrapper :class="`${buttonClassName}__wrapper`">
    <button :class="classes" title="" @click="handleClick">
      {{ title }}
    </button>
  </parallax-wrapper>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ButtonType } from "@/types";
import ParallaxWrapper from "@/wrappers/ParallaxWrapper.vue";

interface ButtonInterface {
  title: string;
  type?: ButtonType;
  onClick?: () => void;
}

const buttonClassName = "button";

const props = withDefaults(defineProps<ButtonInterface>(), {
  type: ButtonType.secondary,
  onClick: undefined,
});

const emit = defineEmits(["click"]);

const handleClick = () => emit("click");

const classes = computed(() => [
  buttonClassName,
  { [`${buttonClassName}_type-${props.type}`]: props.type },
]);
</script>

<style scoped lang="scss">
.button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  font-weight: 600;
  isolation: isolate;
  line-height: 2rem;
  overflow: hidden;
  padding: 1.6rem 2.6rem;
  position: relative;

  &::after,
  &::before {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    transition-delay: 0.1s;
    width: 100%;
    z-index: -1;
  }

  &::after {
    content: "";
    top: 0;
  }

  &::before {
    background: #333333;
    top: 100%;
  }

  &__wrapper {
    a {
      display: block;
    }
  }
}
</style>
