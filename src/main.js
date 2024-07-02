// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";

import App from "./App";
import { store } from "./store/store";
import router from "./router/index";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import carousel from "vue-owl-carousel";
import VueTypedJs from "vue-typed-js";
import GoTop from "@inotom/vue-go-top";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueLazyload from "vue-lazyload";
import VueSocialSharing from "vue-social-sharing";
import VueSimpleAlert from "vue-simple-alert";
// import VCalendar from 'v-calendar';
import Vuelidate from "vuelidate";
// import Vuelidate from "vuelidate/src";
import VueMeta from "vue-meta";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import {
  TooltipPlugin,
  CollapsePlugin,
  LayoutPlugin,
  CardPlugin,
  CalendarPlugin,
  FormDatepickerPlugin,
  ButtonPlugin,
  FormInputPlugin,
  FormPlugin,
  FormGroupPlugin
} from "bootstrap-vue";

import LazyTube from "vue-lazytube";
Vue.use(LazyTube);

Vue.use(CollapsePlugin);
Vue.use(TooltipPlugin);
Vue.use(LayoutPlugin);
Vue.use(CardPlugin);
Vue.use(CalendarPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(FormGroupPlugin);
Vue.use(ButtonPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormPlugin);

Vue.config.productionTip = false;
Vue.use(VueTypedJs);
Vue.use(VueLazyload);
Vue.use(VueSocialSharing);
Vue.use(VueSimpleAlert);
Vue.use(Vuelidate);
Vue.use(VueMeta);



Vue.use(GoTop);
// Vue.component('v-select', vSelect)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import "./assets/css/fonts/icomoon/style.css";
import "./assets/css/main.css";
import "./assets/css/custom.css";

router.beforeResolve((to, from, next) => {
  if (
    store.state.favourite.some(item => {
      return item.name === to.name;
    }) == false
  ) {
    if (store.state.favourite.length == 5) {
      store.state.favourite.splice(0, 1);
    }
    store.state.favourite.push({
      name: to.name,
      title: to.meta.title,
      description: to.meta.description
    });
  }
  next();
});

router.afterEach((to, from) => {});

axios.defaults.headers.common = { Accept: "application/json" };
// axios.defaults.baseURL = "https://web.singularitybd.co/api/v1/";
// axios.defaults.baseURL = "https://web.idlc.com/api/v1/";
// axios.defaults.baseURL = "http://idlc-islamic-backend.test/api/v1/";
axios.defaults.baseURL = "http://139.59.241.231/api/v1/";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

new Vue({
  router,

  store,
  render: h => h(App)
}).$mount("#app");
Vue.component("carousel", carousel);
