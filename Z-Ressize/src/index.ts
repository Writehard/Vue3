//ResizeObserver 主要侦听元素的变化
import type {App} from 'vue'
function useResize(el:HTMLElement, callback:Function) {
    let resize = new ResizeObserver((entries)=> {
        callback(entries[0].contentRect);
    })
    resize.observe(el)
}
// vue是通过createApp创建的
// let app = createApp(App)
//vue插件
//绑定 使用use就会调用底层的install方法
// app.use(router).use(xxx)
const install = (app:App)=> {
    app.direactive('resize',{
        mounted(el, binding){
            useResize(el, binding,value)
        }
    })
}

useResize.install = install
export default useResize