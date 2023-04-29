import { PerspectiveCamera, WebGLRenderer } from "three";
import { useEventListener } from "@/hooks/useEventListener";
import { ref } from "vue";
import { MaybeRef } from "@/types";

export const useCanvasResizer = (args: {
  camera: MaybeRef<PerspectiveCamera>;
  onResize?: () => void;
  renderer: MaybeRef<WebGLRenderer>;
}) => {
  const camera = ref<MaybeRef<PerspectiveCamera>>(args.camera);
  const renderer = ref<MaybeRef<WebGLRenderer>>(args.renderer);

  const setSize = () => {
    if (camera.value && renderer.value) {
      camera.value.aspect = window.innerWidth / window.innerHeight;
      camera.value.updateProjectionMatrix();
      renderer.value.setSize(window.innerWidth, window.innerHeight);
      renderer.value.setPixelRatio(window.devicePixelRatio);
    }

    if (args.onResize) {
      args.onResize();
    }
  };

  setSize();

  useEventListener("resize", setSize);
};
