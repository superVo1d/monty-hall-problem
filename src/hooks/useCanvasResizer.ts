import { PerspectiveCamera, WebGLRenderer } from "three";
import { useEventListener } from "@/hooks/useEventListener";
import { ref } from "vue";
import { MaybeRef } from "@/types";

export const useCanvasResizer = (args: {
  camera: MaybeRef<PerspectiveCamera | null>;
  container?: MaybeRef<HTMLDivElement>;
  onResize?: () => void;
  renderer: MaybeRef<WebGLRenderer>;
}) => {
  const container = ref<MaybeRef<HTMLDivElement>>(args.container);
  const camera = ref<MaybeRef<PerspectiveCamera | null>>(args.camera);
  const renderer = ref<MaybeRef<WebGLRenderer>>(args.renderer);

  const setSize = () => {
    if (camera.value && renderer.value) {
      const [height, width] = container.value
        ? [container.value.clientHeight, container.value.clientWidth]
        : [window.innerHeight, window.innerWidth];
      camera.value.aspect = width / height;
      camera.value.updateProjectionMatrix();
      renderer.value.setSize(width, height);
      renderer.value.setPixelRatio(window.devicePixelRatio);
    }

    if (args.onResize) {
      args.onResize();
    }
  };

  setSize();

  useEventListener("resize", setSize);
};
