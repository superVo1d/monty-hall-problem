import {
  AnimationMixer,
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { ref } from "vue";
import { MaybeRef } from "@/types";
import * as TWEEN from "@tweenjs/tween.js";

const clock = new Clock();

export const animate = (args: {
  camera: PerspectiveCamera;
  renderer?: MaybeRef<WebGLRenderer>;
  scene: Scene;
  mixer?: MaybeRef<AnimationMixer>;
  callback?: (delta: number) => void;
}) => {
  const renderer = ref<MaybeRef<WebGLRenderer>>(args.renderer);
  const mixer = ref<MaybeRef<AnimationMixer>>(args.mixer);

  const animate = () => {
    requestAnimationFrame(animate);

    const delta = clock.getDelta() || 0;

    // if (mixer.value) {
    //   mixer.value.update(delta);
    // }

    if (args.callback) {
      args.callback(delta);
    }

    renderer?.value?.render(args.scene, args.camera);
  };

  animate();
};
