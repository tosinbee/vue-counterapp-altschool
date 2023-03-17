import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/Routes/routes";
import store from "../src/Store/store";
import "./App.css";

createApp(App).use(router).use(store).mount("#app");
