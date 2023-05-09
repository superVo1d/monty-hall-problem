import { Ref } from "vue";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface ModelProviderInjectionInterface {
  models: Ref<{ [name: string]: GLTF } | Record<string, never>>;
  isLoaded: Ref<boolean>;
}
