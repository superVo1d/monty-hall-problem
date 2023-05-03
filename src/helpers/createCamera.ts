import { PerspectiveCamera } from "three";

export const createCamera = () => {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(1, 1, 1);
  camera.lookAt(0, 0, 0);

  return camera;
};
