<template>
<div>
  <h1>pinia</h1>
  <span>{{ test.current }}---{{ test.name }}</span>
  <button @click="change">change</button>
  <hr>
  <h1>
    解构出来
  </h1>
  <span>{{ name }}--{{ current }}</span>
  <hr>
  <h1>actions</h1>
  <span>{{ test.user }}</span><span>{{ test.name }}</span>
  <hr>
  <h1>getters:<p>{{ test.newName }}</p></h1>
  <hr>
  <h1>useTestStore</h1>
  <button @click="reset">重置</button>
</div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { useTestStore } from "./stores";
import { storeToRefs } from "pinia";
//1-直接修改 test.current++
//2-批量修改-对象 test.$patch({current:888,name:'wjz'})
//3-批量修改-函数 test.$patch((state)=>{state.current = 999state.name = 'evanzhezhe'})
//4-不常用-将store整体修改 tes .$state = {current:20000,name:'johnwick'}
//5-通过action test.setCurrent(567)
 const test = useTestStore()
 //将数据解构出来不具有响应式
 //将test进行包裹一层ref
 const {current, name} = storeToRefs(test)
 const change = ()=> {
    test.setUserAsync()
 }
 //$reset()重置state
const reset = ()=> {
  test.$reset()
}
console.log(test.user);
//监测state的变化
test.$subscribe((args, state)=> {
  console.log('=======>', args)
  console.log('===>', state);
})
//监听action
test.$onAction((args)=>{
  console.log('=======>',args)
  args.after(()=>{
    console.log('after')
  })
  console.log(args)
  
})
</script>

<style scoped>
</style>