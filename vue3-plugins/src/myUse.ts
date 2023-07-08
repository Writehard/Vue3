import type { App}from 'vue'
import {app} from './main'
interface Use {
    install:(app:App, ...options:any[])=>void
}

//缓存策略
const installList = new Set()
export function myUse<T extends Use>(plugin:T) {
    if(installList.has(plugin)){
        console.error('不好意思，注册过了',plugin);
        
    }else {
    plugin.install(app)
    installList.add(plugin)
    }
};