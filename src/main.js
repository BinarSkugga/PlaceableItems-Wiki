import Vue from 'vue'
import './plugins/axios'
import App from './app.vue'

import store from './plugins/store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
