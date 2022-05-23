import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import {  cart } from "@fortawesome/free-regular-svg-icons";

library.add(fas);

const app = createApp(App).component("fa", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
