import { Color, Scene } from "three";

export const createScene = (color: Color) => {
  const scene = new Scene();

  scene.background = null;

  return scene;
};
