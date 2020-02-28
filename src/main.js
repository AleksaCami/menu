import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Autocomplete from "v-autocomplete";

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "v-autocomplete/dist/v-autocomplete.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faEuroSign,
  faPlusCircle,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
Vue.use(Autocomplete);

library.add(faSearch, faEuroSign, faPlusCircle, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
