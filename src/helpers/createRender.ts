import { WebGLRenderer } from "three";

export const createRenderer = (canvas: HTMLCanvasElement | undefined) =>
  new WebGLRenderer({
    canvas: canvas as unknown as HTMLCanvasElement,
    antialias: true,
  });
