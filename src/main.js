import Vue from 'vue'
import App from 'js/componente/App.vue'
import router from './router'
import store from 'js/store'
import VueScrollTo from 'vue-scrollto'
import firebase from 'firebase'

Vue.use(VueScrollTo)

Vue.config.productionTip = false
const config = {
  apiKey: 'AIzaSyAEhyWIXAcv4QL06F4ZGECo4JdQlYva8jQ',
  projectId: 'sloth-health',
  authDomain: 'sloth-health.firebaseapp.com',
  databaseURL: 'https://sloth-health.firebaseio.com',
  storageBucket: 'sloth-health.appspot.com',
}

firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')