import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import  axios  from "axios";
import store from './store'
require('@/store/module/Subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.headers.common[{
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTION'

}]
createApp(App).use(store).use(router).mount('#app')
