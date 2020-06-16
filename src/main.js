import Vue from "vue";
// Third party libs
import VueNativeSock from "vue-native-websocket";

// Register Plug-ins
import "./plugins/vuetify";

// Load config
import config from "./config";
Vue.config.productionTip = false;

// Import startup components
import App from "./App.vue";
import router from "./router";

// Init Vuex
import store from "./store";
import VueI18n from "vue-i18n";
const i18n = new VueI18n({
  locale: "en", // set locale
});
Vue.use(VueNativeSock, config.WS_SERVER_URL, { store, format: "json" });

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
