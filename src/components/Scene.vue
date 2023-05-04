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
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { onMounted, ref } from "vue";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  animate,
  createCamera,
  createLights,
  createRenderer,
  createScene,
} from "@/helpers";
import { useCanvasResizer } from "@/hooks";
import { SceneType } from "@/types";

const camera = ref<PerspectiveCamera>();
const canvas = ref<HTMLCanvasElement>();
const container = ref<HTMLDivElement>();
// const controls = ref<OrbitControls>();
const light = ref<Light>();
const mixer = ref<AnimationMixer>();
const model = ref<GLTF>();
const renderer = ref<WebGLRenderer>();
const scene = ref<Scene>();

interface SceneInterface {
  type: SceneType;
}

const props = defineProps<SceneInterface>();

const url = {
  [SceneType.car]: "/models/car/scene.gltf",
  [SceneType.goat]: "/models/goat/scene.gltf",
}[props.type];

useCanvasResizer({
  camera,
  container,
  onResize: () => {
    // controls?.value?.update();
  },
  renderer,
});

const clock = new Clock();

const animationCallback = () => {
  const delta = clock.getDelta() || 0;
  mixer?.value?.update(delta);

  TWEEN.update();
};

const animateAppearance = (_camera: PerspectiveCamera) => {
  new TWEEN.Tween({ x: 2, y: 2, z: 2 })
    .to({ x: 1, y: 1, z: 1 }, 400)
    .onUpdate((values) => {
      _camera.position.set(values.x, values.y, values.z);
    })
    .start();

  if (props.type === SceneType.goat) {
    new TWEEN.Tween({ rotateX: 1 })
      .to({ rotateX: 0 }, 400)
      .onUpdate(({ rotateX }) => {
        if (model.value) {
          model.value.scene.rotation.y = Math.PI * rotateX;
        }
      })
      .start();
  } else {
    new TWEEN.Tween({ rotateX: 0 })
      .to({ rotateX: -1 }, 400)
      .onUpdate(({ rotateX }) => {
        if (model.value) {
          model.value.scene.rotation.y = Math.PI * rotateX;
        }
      })
      .start()
      .chain(
        new TWEEN.Tween({ rotateX: 1 })
          .to({ rotateX: -1 }, 20000)
          .onUpdate(({ rotateX }) => {
            if (model.value) {
              model.value.scene.rotation.y = Math.PI * rotateX;
            }
          })
          .repeat(Infinity)
      );
  }
};

onMounted(() => {
  const [height, width] = [
    container?.value?.clientHeight || 0,
    container?.value?.clientWidth || 0,
  ];

  const _scene = createScene(new Color(0xdddddd));
  scene.value = _scene;

  const _camera = createCamera();
  camera.value = _camera;
  camera.value.aspect = width / height;
  camera.value.updateProjectionMatrix();

  light.value = createLights(new Color(0x404040)).light;
  renderer.value = createRenderer(canvas.value);
  //controls.value = createControls(camera.value, renderer.value);

  // const axes = new AxesHelper(1);

  scene.value.add(camera.value);
  scene.value.add(light.value);
  // scene.value.add(axes);

  renderer.value.setSize(width, height);
  renderer.value.render(_scene, _camera);
  // controls.value.update();

  const loader = new GLTFLoader();

  loader.load(url, (gltf) => {
    gltf.scene.position.y = -0.2;
    if (props.type === SceneType.goat) {
      gltf.scene.scale.set(1.3, 1.3, 1.3);
      gltf.scene.position.y = -0.3;
    }
    model.value = gltf;
    _scene.add(gltf.scene);

    mixer.value = new AnimationMixer(gltf.scene);
    renderer?.value?.render(_scene, _camera);

    gltf.animations.forEach((clip) => {
      mixer?.value?.clipAction(clip).play();
    });
  });

  animateAppearance(_camera);

  animate({
    callback: animationCallback,
    camera: _camera,
    renderer,
    scene: _scene,
  });
});
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
