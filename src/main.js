import { createApp } from 'vue'
import { router } from './router';
import vuebraintree from 'vue-braintree';
import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/styles/main.scss'

createApp(App).use(vuebraintree).use(router).mount('#app')
