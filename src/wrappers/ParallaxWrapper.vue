<template>
  <div :class="classes">
    <div ref="wrapperRef" :class="`${parallaxWrapperClassName}__container`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { MotionProperties, MotionVariants, useMotion } from "@vueuse/motion";

interface ParallaxWrapperInterface {
  active?: boolean;
  threshold?: number;
}

const parallaxWrapperClassName = "parallax-wrapper";

const props = withDefaults(defineProps<ParallaxWrapperInterface>(), {
  active: true,
  threshold: -15,
});

const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const wrapperRef = ref<HTMLElement>();

const interpolateTransform = (
  w: number,
  x: number,
  y: number
): MotionProperties => ({
  perspective: `${w}px`,
  rotateX: `${x}deg`,
  rotateY: `${y}deg`,
});

const { apply } = useMotion(wrapperRef);

const checkMouseOver = (
  x: number,
  y: number,
  width: number,
  height: number,
  clientX: number,
  clientY: number
) => clientX > x && clientX < x + width && clientY > y && clientY < y + height;

const setDefaults = async (width: number) =>
  await apply(interpolateTransform(width, 0, 0));

const handleMouseMove = async (e: MouseEvent) => {
  if (!motionMatchMedia || !props.active || !wrapperRef.value) {
    return;
  }

  const { clientX, clientY } = e;
  const { x, y, width, height } = wrapperRef.value.getBoundingClientRect();

  const horizontal = (clientX - x) / width;
  const vertical = (clientY - y) / height;

  const rotateX = props.threshold / 2 - horizontal * props.threshold;
  const rotateY = vertical * props.threshold - props.threshold / 2;

  const isMouseOver = checkMouseOver(x, y, width, height, clientX, clientY);

  if (isMouseOver) {
    await apply(interpolateTransform(width, rotateY, rotateX));
  } else {
    await setDefaults(width);
  }
};

onMounted(() => {
  if (!wrapperRef.value) {
    return;
  }

  const { width } = wrapperRef.value.getBoundingClientRect();

  setDefaults(width);

  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});

const classes = computed(() => [parallaxWrapperClassName]);
</script>

<style lang="scss" scoped>
.parallax-wrapper {
  z-index: 1;

  &__container {
    backface-visibility: hidden;
    display: block;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.1s ease;
    will-change: transform;
    z-index: -1;
  }

  @media (prefers-reduced-motion) {
    transform: none !important;
  }
}
</style>
