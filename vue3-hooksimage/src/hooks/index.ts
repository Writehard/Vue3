
import { onMounted } from "vue";

type Options = {
    el:string
}



export default function (Options:Options):Promise<{baseUrl:string}> {
    return new Promise((resolve)=> {
        onMounted(()=> {
            //拿到当前元素
            let img:HTMLImageElement = document.querySelector(Options.el) as HTMLImageElement
            img.onload = ()=> {
                resolve({
                    baseUrl:base64(img)
                })
            }
            const base64 = (el:HTMLImageElement) => {
                //创建canvas
                const canvas = document.createElement('canvas')
                
                const ctx = canvas.getContext('2d')
                canvas.width = el.width
                canvas.height = el.height
                ctx?.drawImage(el,0,0,canvas.width,canvas.height)
                return canvas.toDataURL('imgae/jpeg')
            }
        })
    })
    
};