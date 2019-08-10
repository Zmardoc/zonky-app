import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import { MdField, MdMenu, MdList, MdCard } from "vue-material/dist/components";

Vue.use(MdField);
Vue.use(MdMenu);
Vue.use(MdList);
Vue.use(MdCard);
Vue.use(VueAxios, axios);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
