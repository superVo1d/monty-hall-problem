<template>
  <canvas ref="canvas" />
</template>

<script setup lang="ts">
import {
  AxesHelper,
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AnimationMixer,
  Light,
} from "three";
import { onMounted, ref } from "vue";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  createCamera,
  createControls,
  createLights,
  createRenderer,
  createScene,
} from "@/helpers";
import { useAnimationLoop, useCanvasResizer } from "@/hooks";

const camera = ref<PerspectiveCamera>();
const canvas = ref<HTMLCanvasElement>();
const controls = ref<OrbitControls>();
const light = ref<Light>();
const mixer = ref<AnimationMixer>();
const model = ref<GLTF>();
const renderer = ref<WebGLRenderer>();
const scene = ref<Scene>();

useCanvasResizer({
  camera,
  onResize: () => {
    controls?.value?.update();
  },
  renderer,
});

onMounted(() => {
  const _scene = createScene(new Color(0xdddddd));
  scene.value = _scene;

  const _camera = createCamera();
  camera.value = _camera;
  light.value = createLights(new Color(0x404040)).light;
  renderer.value = createRenderer(canvas.value);
  controls.value = createControls(camera.value, renderer.value);

  const axes = new AxesHelper(1);

  scene.value.add(camera.value);
  scene.value.add(light.value);
  scene.value.add(axes);

  renderer.value.setSize(window.innerWidth, window.innerHeight);
  renderer.value.render(_scene, _camera);

  controls.value.update();

  const loader = new GLTFLoader();

  loader.load("/models/goat/scene.gltf", (gltf) => {
    model.value = gltf;
    _scene.add(gltf.scene);

    mixer.value = new AnimationMixer(gltf.scene);
    renderer?.value?.render(_scene, _camera);

    gltf.animations.forEach((clip) => {
      mixer?.value?.clipAction(clip).play();
    });
  });

  useAnimationLoop({
    camera: _camera,
    renderer,
    scene: _scene,
    mixer,
  });
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
