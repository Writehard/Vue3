<template>
  <div>
    <h1>watchEffect 测试</h1>
    case:1 <input type="text" v-model="message" id="ipt">
    <hr>
    case:2 <input type="text" v-model="message2">
  </div>
  <button @click="stopWatch">停止监听</button>
</template>
<script setup lang='ts'>
import { ref, watchEffect} from 'vue'
// 基本数据类型
let message = ref('john wick');
let message2 = ref('evan zhe');
const stop = watchEffect((oninvalidate) => {
      // let ipt = document.querySelector('#ipt')
      console.log("message======>",message.value);
      // console.log("message2======>",message2.value);
      // 清楚副作用
      oninvalidate(() => {
        // 防抖
        // 清除接口
        // console.log(ipt)
        console.log('before')
      })
      
},{
  flush:"post",
  // onTrigger(e){
  //   debugger
  // }
})
// 停止监听
const stopWatch = () => {
    stop();
  }
</script>
<style scoped>
</style>