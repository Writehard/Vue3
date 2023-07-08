<template>
    <div>
        <div>
            <!-- <img v-lazy="item" v-for="item in arr" :src="item" alt="" width="360" height="500" id="img"> -->
            <img src="./assets/1.jpeg" alt="" id="img" width="300" height="300">
            <Avue a="456" title="123"></Avue>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">
    import Avue from './components/A.vue';
    import { reactive, ref } from 'vue';
    import type { Directive } from 'vue';
    import useBase64 from './hooks/index.ts';
    //glob 是懒加载的模块
    //let imagelist = import.meta.glod('./assets/*',{eager:true})
    // let modules = {
    //   'xxxx':()=> import('xxxx')
    // }
    //替代方案
    // globEager 静态加载
    // import xxx from "module";
    let imagelist: Record<string, {default: string}> = import.meta.glob('./assets/*.*',{
        eager:true
    });
    let arr = Object.values(imagelist).map(v=>v.default)
    
    // let vLazy:Directive<HTMLImageElement,string> =  async (el.binding) => {
    //     const def = await import('./assets/1.jpeg')
    //     el.src = def.default
    //     const observer = new IntersectionObserver((enr)=> {
    //         console.log(enr);
            
    //     })
    //     observer(el)
    // }
    let vLazy:Directive<HTMLImageElement, string> = async(el,binding)=> {
        const def = await import ('./assets/7.jpeg')
        el.src = def.default
        //怎么去判断一个元素在可视区域内呢
        const observer = new IntersectionObserver((enr)=>{
            if(enr[0].intersectionRatio > 0){
                setTimeout(() => {
                    el.src = binding.value
                observer.unobserve(el)
                }, 2000);
                
            }
            
        },{})
        observer.observe(el)
    }
    useBase64({el:'#img'}).then((res)=> {
        console.log(res.baseUrl);
        
    })
    </script>
    
    <style scoped>
    </style>