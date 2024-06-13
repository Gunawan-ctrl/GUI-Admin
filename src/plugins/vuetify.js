import defaults from './defaults'


import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import { createVuetify } from "vuetify";

const app = createApp();
const vuetify = createVuetify({
  defaults,
  icons: {
    iconfont: "mdi",
  },
  ssr: true,
});

app.use(vuetify);

export default vuetify;
