import Vue from 'vue'
import './plugins/axios'
import App from './app.vue'

import store from './plugins/store'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-53760813-3',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
    enabled: !(process.env.NODE_ENV === 'production')
  },
  disabled: () => !(localStorage.getItem('cookie:accepted') === 'true')
});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
