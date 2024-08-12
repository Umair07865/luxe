import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import FontAwesomeIcon from "./font-awesome";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";
Vue.component("font-awesome-icon", FontAwesomeIcon);
import "@/global.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
