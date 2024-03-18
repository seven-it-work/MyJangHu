import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import router from "@/router/index.js";
import store from "@/vuex/store.js";

const app = createApp(App)
app.use(router).use(Antd).use(store).mount('#app')
