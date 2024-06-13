import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// plugin pendukung
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Notifications from "@kyvg/vue3-notification";
import VueApexCharts from "vue3-apexcharts";

// tailwind
import "./assets/tailwind.css";

// boot
import axiosInstance from "@/boot/axios.js";
import createToken from "@/boot/create_token";
import Notify from "@/boot/notify.js";

// vuetify
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import AdminLayout from "@/layouts/AdminLayout.vue";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.component("AdminLayout", AdminLayout);

app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$createToken = createToken;

app
  .use(router)
  .use(vuetify)
  .use(VueSweetalert2)
  .use(Notifications)
  .use(Notify)
  .use(VueApexCharts)
  .mount("#app");
