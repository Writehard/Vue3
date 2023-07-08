//插件有两种形式 对象式 函数式 
//对象式的话必须拥有install函数
import type {App,VNode} from  'vue';
import Load from './index.vue';
import {createVNode,render} from 'vue'
export default {
    install(app:App){
        //Load转成vnode
        const Vnode:VNode = createVNode(Load)
        //手动挂载
        render(Vnode,document.body)
        app.config.globalProperties.$loading = {
            show:Vnode.component?.exposed.show,
            head:Vnode.component?.exposed.head,
        }
    }
}