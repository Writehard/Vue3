
import { createApp } from 'vue'
import App from './App.vue'
import { myUse } from './myUse';

//引入插件
import Load from './components/loading'
export const app = createApp(App)
myUse(Load)
app.use(Load)
app.mount('#app')
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties{
        $loading:Load
    }
}
