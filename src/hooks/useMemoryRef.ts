import { ref, watch } from "vue";

export const useMemoryRef = (name: string, initialValue?: any) => {
  const storedValue = window.localStorage.getItem(name);

  const state = ref(storedValue ? JSON.parse(storedValue) : initialValue);

  watch(
    state,
    () => {
      if (state.value) {
        window.localStorage.setItem(name, JSON.stringify(state.value));
      } else {
        window.localStorage.removeItem(name);
      }
    },
    { deep: true }
  );

  return state;
};
