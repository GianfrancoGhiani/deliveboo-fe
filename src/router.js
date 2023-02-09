import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ContactUs from './pages/ContactUs.vue';
import AboutUs from './pages/About.vue';
import NotFound from './pages/NotFound.vue';
import AppDownload from './pages/AppDownload.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactUs
        },
        {
            path: '/app-download',
            name: 'app-download',
            component: AppDownload
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
        

       
    ]
});

export { router };