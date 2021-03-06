import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// Ensure you are using css-loader

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({ render: h => h(App), el: '#app' })