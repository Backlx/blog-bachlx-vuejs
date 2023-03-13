import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import Vuex from 'vuex';
import 'vuetify/styles'
import './assets/main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/main.css'

const vuetify = createVuetify({
    components,
    directives,
  })

  


createApp(App).use(vuetify).use(router).use(Vuex).mount('#app')
