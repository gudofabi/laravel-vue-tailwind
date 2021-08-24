import Vue from 'vue';
import router from './routes/index';
import store from './store/index';
import App from './pages/App';

new Vue({
    el: '#app',
    router,
    store,
    ...App
})