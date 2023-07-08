
import { createApp } from 'vue'
//elementui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//ant-desigin
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//ant
import { Button } from 'vant';
//引入样式
import 'vant/lib/index.css';
//viewDesgin
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
const app = createApp(App)
app.use(Antd).use(ElementPlus).use(Button).use(ViewUIPlus)
app.mount('#app')