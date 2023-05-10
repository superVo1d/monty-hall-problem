<template>
  <div ref="container">
    <canvas ref="canvas" />
  </div>
</template>

<script setup lang="ts">
import {
  AnimationMixer,
  Clock,
  Color,
  Light,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { inject, onMounted, ref, toRaw, watch } from "vue";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import {
  createCamera,
  createLights,
  createRenderer,
  createScene,
} from "@/helpers";
import { useAnimateScene, useCanvasResizer } from "@/hooks";
import { ModelProviderInjectionInterface, SceneType } from "@/types";
import { modelInjectionKey } from "@/components/providers/injectionKeys";

const injectedModels = inject(
  modelInjectionKey
) as ModelProviderInjectionInterface;

const camera = ref<PerspectiveCamera>();
const canvas = ref<HTMLCanvasElement>();
const container = ref<HTMLDivElement>();
// const controls = ref<OrbitControls>();
const light = ref<Light>();
const mixer = ref<AnimationMixer>();
const model = ref<Object3D>();
const renderer = ref<WebGLRenderer>();
const scene = ref<Scene>();
const tweens = ref<any[]>([]);

const { startAnimation, stopAnimation } = useAnimateScene();

interface SceneInterface {
  visible: boolean;
  type: SceneType;
}

const props = defineProps<SceneInterface>();

const isProdPath =
  // eslint-disable-next-line
  process.env.NODE_ENV === "production" ? "/monty-hall-problem" : "";

const url = {
  [SceneType.car]: `${isProdPath}/models/car/scene.gltf`,
  [SceneType.goat]: `${isProdPath}/models/goat/scene.gltf`,
}[props.type];

useCanvasResizer({
  camera,
  container,
  // onResize: () => {
  //   controls?.value?.update();
  // },
  renderer,
});

const clock = ref<Clock>();

const animationCallback = () => {
  const delta = clock.value?.getDelta() || 0;
  mixer?.value?.update(delta);

  TWEEN.update();
};

const animateAppearance = () => {
  if (!camera.value) {
    return;
  }

  const zoomAnimationTween = new TWEEN.Tween({ x: 2, y: 2, z: 2 })
    .to({ x: 1, y: 1, z: 1 }, 400)
    .onUpdate((values) => {
      toRaw(camera.value)?.position.set(values.x, values.y, values.z);
    })
    .start();

  tweens.value.push(zoomAnimationTween);

  const rotateAnimationTween = new TWEEN.Tween({ rotateX: 1 })
    .to({ rotateX: 0 }, 400)
    .onUpdate(({ rotateX }) => {
      const transformedRotate =
        props.type === SceneType.goat ? rotateX : rotateX - 1;
      if (model.value) {
        model.value.rotation.y = Math.PI * transformedRotate;
      }
    })
    .start();

  const infiniteRotateAnimationTween = new TWEEN.Tween({ rotateX: 1 })
    .to({ rotateX: -1 }, 20000)
    .onUpdate(({ rotateX }) => {
      if (model.value) {
        model.value.rotation.y = Math.PI * rotateX;
      }
    })
    .repeat(Infinity);

  if (props.type === SceneType.car) {
    rotateAnimationTween.chain(infiniteRotateAnimationTween);
    tweens.value.push(infiniteRotateAnimationTween);
  }

  tweens.value.push(rotateAnimationTween);
};

const addModel = () => {
  if (!(scene.value && camera.value)) {
    return;
  }

  const gltf = toRaw(injectedModels.models.value[props.type]);

  if (!gltf?.scene) {
    return;
  }

  const _scene = SkeletonUtils.clone(gltf.scene);

  model.value = _scene;

  _scene.position.y = -0.2;

  if (props.type === SceneType.goat) {
    _scene.scale.set(1.3, 1.3, 1.3);
    _scene.position.y = -0.3;
  }

  toRaw(scene.value).add(_scene);

  console.log("Adding model to scene.");

  mixer.value = new AnimationMixer(_scene);
  renderer.value?.render(toRaw(scene.value), toRaw(camera.value));

  gltf.animations.forEach((clip) => {
    mixer.value?.clipAction(clip).play();
  });

  clock.value = new Clock();

  animateAppearance();
  startAnimation({
    callback: animationCallback,
    camera: toRaw(camera.value),
    renderer,
    scene: toRaw(scene.value),
  });
};

const init = () => {
  const [height, width] = [
    container?.value?.clientHeight || 0,
    container?.value?.clientWidth || 0,
  ];

  scene.value = createScene(new Color(0xdddddd));
  camera.value = createCamera();
  camera.value.aspect = width / height;
  camera.value.updateProjectionMatrix();
  light.value = createLights(new Color(0x404040)).light;
  renderer.value = createRenderer(canvas.value);
  // controls.value = createControls(toRaw(camera.value), toRaw(renderer.value));

  // const axes = new AxesHelper(1);

  scene.value.add(camera.value);
  scene.value.add(light.value);
  // scene.value.add(axes);

  renderer.value.setSize(width, height);
  renderer.value.render(toRaw(scene.value), toRaw(camera.value));
  // controls.value.update();
};

onMounted(() => setTimeout(() => init(), 50));

watch(
  () => injectedModels.isLoaded.value,
  () => {
    clearScene();

    if (injectedModels?.isLoaded.value && props.visible) {
      addModel();
    }
  }
);

const clearScene = () => {
  if (!model.value) {
    return;
  }

  toRaw(scene.value)?.remove(toRaw(model.value));
  stopAnimation();
  tweens.value.forEach((item) => TWEEN.remove(item));
};

watch(
  () => [props.type, props.visible],
  () => {
    console.log("Clearing scene.");
    clearScene();

    if (injectedModels?.isLoaded.value && props.visible) {
      addModel();
    }
  }
);
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}

canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
