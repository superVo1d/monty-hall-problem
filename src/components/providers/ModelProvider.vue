<template>
  <slot />
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import { LoadingManager } from "three/src/loaders/LoadingManager";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelProviderInjectionInterface, SceneType } from "@/types";
import { modelInjectionKey } from "@/components/providers/injectionKeys";

const isProdPath =
  // eslint-disable-next-line
  process.env.NODE_ENV === "production" ? "/monty-hall-problem" : "";

const modelPaths: { [name: string]: string } = {
  [SceneType.car]: `${isProdPath}/models/car/scene.gltf`,
  [SceneType.goat]: `${isProdPath}/models/goat/scene.gltf`,
};

const models = ref<{ [name: string]: GLTF } | Record<string, never>>({});
const isLoaded = ref<boolean>(false);

onMounted(() => {
  const manager = new LoadingManager();
  const loader = new GLTFLoader(manager);

  manager.onLoad = function () {
    console.log("Models are loaded.");
    isLoaded.value = true;
  };

  setTimeout(() => {
    Object.keys(modelPaths).forEach((modelType) => {
      loader.load(modelPaths[modelType], (gltf) => {
        models.value[modelType] = gltf;
      });
    });
  }, 100000);
});

provide<ModelProviderInjectionInterface>(modelInjectionKey, {
  models,
  isLoaded,
});
</script>
