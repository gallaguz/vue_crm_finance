import Vue from 'vue'
import Vuelidate from "vuelidate"
import App from './App.vue'
import router from './router'
import store from './store'

import messagePlugin from '@/utils/message.plugin'
import dateFilter from "@/filters/date.filter";

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin);
Vue.use(Vuelidate);

Vue.filter('date', dateFilter);


firebase.initializeApp({
  apiKey: "AIzaSyC5npQ3xusrlLv9WttrisHDLDFjnNypAmk",
  authDomain: "vue-crm-finance-2adb1.firebaseapp.com",
  projectId: "vue-crm-finance-2adb1",
  storageBucket: "vue-crm-finance-2adb1.appspot.com",
  messagingSenderId: "603473693192",
  appId: "1:603473693192:web:91c30e2ea4d0bd3b5adfbd",
  measurementId: "G-4F5DT5W2HH"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }

});


