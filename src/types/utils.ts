import { Ref } from "vue";

export type MaybeRef<T> = Ref<T | undefined> | T | undefined;
