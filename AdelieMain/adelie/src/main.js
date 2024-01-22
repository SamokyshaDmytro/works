import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import TextClamp from 'vue3-text-clamp';

const i18n = createI18n({
    locale: 'en',
    messages: {
        en
    }
})



const app = createApp(App);

app.use(router).use(TextClamp).use(i18n).mount('#app');