import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import { createVuetify } from "vuetify";

const app = createApp();
const vuetify = createVuetify({
  icons: {
    iconfont: "mdi",
  },
  ssr: true,
});

app.use(vuetify);

export default vuetify;
