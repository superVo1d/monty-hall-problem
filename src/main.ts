import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(MotionPlugin);

app.mount("#app");
