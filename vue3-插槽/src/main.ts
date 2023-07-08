import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全局组件
const app = createApp(App)
app.mount('#app')
// 批量注册
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
