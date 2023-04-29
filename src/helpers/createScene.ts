import { Color, Scene } from "three";

export const createScene = (color: Color) => {
  const scene = new Scene();

  scene.background = new Color(color);

  return scene;
};
