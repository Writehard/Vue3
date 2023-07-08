// 直接返回一个渲染函数- ok
import {defineComponent,ref} from 'vue'
// export default function() {
//     return (<div>我是john wick</div>)
// }
// optionsAPI -no
// export default h() {
//     data(){
//         return {
//             age:20
//         }
//     }
//     render() {
//         return (<div>{this.age}</div>)
//     }
// }
//setup-ok
// 支持指令 v-show - 注意使用的方式 v-show={flag}
// 不支持 v-if -解决方法三元表达式
//<><div>{flag.value?<div>true</div>:<div>false</div>}</div></>
//不支持v-for -解决方案map
// <>
// {data.map((item)=>{
//     return <div>{item.name}</div>
// })}
// </>
//v-bind 解决方案 {}代替
// props emit
// 事件 使用的是onClick 
// 如果不传递参数 直接 fn
//传递参数的话需要使用()=> {fn(args)}形式
// 插槽
const A = (_,{slots}) => (
<>
    <div>{slots.default ? slots.default() : '默认值'}</div>
    <div>{slots.foo?.()}</div>
</>
)
interface Props {
    name?:string
}
export default defineComponent({
    props:{
        name:String
    },
    emit:['on-click'],
    setup(props:Props,{emit}){
        const flag = ref(true);
        const data = [
            {
                name:'wick'
            },
            {
                name:'john'
            },
            {
                name:'evan'
            }
        ];
        const fn = (item:any)=> {
            console.log('触发了',item);
            emit('on-click',item)
        }
        const slot = {
            default:() => (<div>john wick defalut slots</div>),
            foo:() => (<div>foo slot</div>)
        } 
        const v= ref('')
        return () =>(
            <>
            <input type="text" v-model={v.value} />
            <div>{v.value}</div>
            <h1>插槽</h1>
            <A v-slots={slot}></A>
            <hr />
            <div>props:{props?.name}</div>
            <hr />
            {data.map((item)=>{
                return <div onClick={()=> {fn(item)}}>{item.name}</div>
            })}
            </>
        )
    }
})
//ref 在template中自动解包 .value tsx 中不会