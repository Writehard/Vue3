<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { reactive,ref,nextTick,getCurrentInstance } from 'vue';
let instance = getCurrentInstance()
console.log(instance);

// import TheWelcome from './components/TheWelcome.vue'
// import PageOne from './views/PageOne.vue'
let chatList = reactive([
  {
    name:'evanzhe',
    message:'xxxxx'
  }
])
//vue更新dom是异步 数据更新是同步
//代码是同步代码
//当我们操作dom的时候发现数据读取的是上次的 就需要使用nextTick
let box = ref<HTMLElement>()
let ipt = ref('');
const send =  async () =>{
  chatList.push({
    name:'zhe',
    message:ipt.value
  })
  //操作dom不生效的时候 使用nextTick
  //1.回调函数的写法
  // nextTick(()=> {
  // //非空断言
  // box.value!.scrollTop = 999999
  // })
  //2.async await
  await nextTick()
  box.value!.scrollTop = 999999
}
</script>

<template>
  <HelloWorld></HelloWorld>
  <div ref="box" class="wraps">
    <div>
      <div class="item" v-for="item in chatList">
      <div>{{ item.name }}</div>
      <div>{{ item.message }}</div>
    </div>
    </div>
  </div>
  <div class="ipt">
    <div>
      <textarea v-model="ipt" type="text"></textarea>
    </div>
    <div>
      <button @click="send">Send</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.wraps {
  height: 200px;
  width: 231px;
  overflow: scroll;
  border: 1px solid black;
  .item{
    background-color: #ccc;
    width: 100%;
  }
}

</style>
