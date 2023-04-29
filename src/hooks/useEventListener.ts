import { onMounted, onUnmounted } from "vue";

export const useEventListener = (event: string, callback: () => void) => {
  onMounted(() => {
    window.addEventListener(event, callback);
  });

  onUnmounted(() => {
    window.removeEventListener(event, callback);
  });
};
