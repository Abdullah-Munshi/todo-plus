import { createApp } from "vue";
import { createPinia } from "pinia";
import ToastPlugin from "vue-toast-notification";
import App from "./App.vue";
import "./assets/main.css";
import "vue-toast-notification/dist/theme-bootstrap.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(ToastPlugin);
app.mount("#app");
