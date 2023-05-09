import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { ref, toRaw, unref } from "vue";
import { MaybeRef } from "@/types";

const clock = new Clock();

export const useAnimateScene = () => {
  const camera = ref<PerspectiveCamera>();
  const renderer = ref<MaybeRef<WebGLRenderer>>();
  const scene = ref<Scene>();
  const callback = ref<(delta: number) => void>();

  let animationId: number;

  const animate = () => {
    animationId = requestAnimationFrame(animate);

    const delta = clock.getDelta() || 0;

    if (callback.value) {
      callback.value(delta);
    }

    render();
  };

  const render = () => {
    if (renderer.value && scene.value && camera.value) {
      unref(renderer.value)?.render(toRaw(scene.value), toRaw(camera.value));
    }
  };

  const startAnimation = (args: {
    camera: PerspectiveCamera;
    renderer: MaybeRef<WebGLRenderer>;
    scene: Scene;
    callback?: (delta: number) => void;
  }) => {
    camera.value = args.camera;
    renderer.value = args.renderer;
    scene.value = args.scene;
    callback.value = args.callback;

    animate();
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationId);

    render();
  };

  return { stopAnimation, startAnimation };
};
