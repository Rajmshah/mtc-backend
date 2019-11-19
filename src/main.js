import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import CKEditor from "@ckeditor/ckeditor5-vue";
import tinymce from "vue-tinymce-editor";
import Multiselect from "vue-multiselect";
// toaster
import Toaster from "v-toaster";
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "v-toaster/dist/v-toaster.css";

// dateTime
import Datetime from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";

// Vselect
import vSelect from "vue-select";

// Font awesome
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

// vue-notification
import Notifications from "vue-notification";
//lodash
import lodash from "lodash";
import VueLodash from "vue-lodash";

// vue-validation
import Vuelidate from "vuelidate";

// FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignRight, faHeart, faSignOutAlt, faTrash } from "@fortawesome/free-solid-svg-icons"; // fa
import { faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons"; // far
import {
  faSpinner,
  faShoppingCart,
  faGlobeAmericas,
  faGift,
  faUsers,
  faEdit,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons"; // fas
import { faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"; // fab

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.component("tinymce", tinymce);
Vue.component("Multiselect", Multiselect);

Vue.use(VueLodash, lodash);
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, { timeout: 5000 });
Vue.use(Datetime);

Vue.use(CKEditor);
Vue.component('v-select', vSelect);

// vue-moment
Vue.use(require('vue-moment'));

Vue.use(Notifications);
Vue.use(Vuelidate);

Vue.use(BootstrapVue);

Vue.component('icon', Icon);

Vue.config.productionTip = false;

library.add(
  faAlignRight,
  faEye,
  faEdit,
  faTrashAlt,
  faTwitter,
  faFacebookSquare,
  faHeart,
  faSpinner,
  faShoppingCart,
  faGlobeAmericas,
  faGift,
  faUsers,
  faSignOutAlt,
  faPencilAlt,
  faTrash,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
