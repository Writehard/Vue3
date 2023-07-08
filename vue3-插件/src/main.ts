import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
export const app = createApp(App)
import Loading from './Loading/Index.vue'

//
app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filters = {
    format<T>(str:T){
        return `evanzhe-${str}`
    }
}
app.use(Loading)
//报错是因为没有声明文件
type Filter = {
    format<T>(str:T):string
}
declare module 'vue' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env:string
    }
}
app.mount('#app')
