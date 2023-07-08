import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全局组件
import CardVue from './components/expame/Card.vue'
const app = createApp(App)
app.component('Card', CardVue)
app.mount('#app')
// 批量注册
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
