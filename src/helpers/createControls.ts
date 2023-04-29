import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera, WebGLRenderer } from "three";

export const createControls = (
  camera: PerspectiveCamera,
  renderer: WebGLRenderer
) => new OrbitControls(camera, renderer.domElement);
