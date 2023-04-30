import {
  AmbientLight,
  Color,
  DirectionalLight,
  DirectionalLightHelper,
} from "three";

export const createLights = (color: Color) => {
  //const light = new DirectionalLight(color, 4);
  const light = new AmbientLight(0x404040, 5);
  //const lightHelper = new DirectionalLightHelper(light, 0);

  light.position.set(0, 0, 5);

  return { light };
};
