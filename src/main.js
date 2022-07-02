import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLeaf,
  faArrowLeft,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLeaf, faArrowLeft, faArrowRight, faEnvelope);

var app = createApp(App);
//コンポーネントの追加
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
