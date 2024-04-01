import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import router from "@/router/index.js";
import store from "@/vuex/store";
import {people, city, world, scene} from "@/http/api.js";

const api = {people, city, world, scene}

const app = createApp(App)
app.use(router).use(Antd).use(store).mount('#app')

app.provide('$api', api)

