import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

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
  render: h => h(App)
}).$mount('#app')