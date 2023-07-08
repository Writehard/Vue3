<template>
  <div>
    <h1>watch 基础类型 测试</h1>
    <h1>多个值</h1>
    <span>{{ message }}</span>
    <hr>
    <span>{{ count }}</span>
    case:1 <input type="text" v-model="message">
    case:2 <input type="text" v-model="count">
    <hr>
    <h1>一个值</h1>
    case:3 <input type="text" v-model="message2">
    <span>{{ message2 }}</span>
  </div>
  <h2>watch - object类型</h2>
  <h1>{{ person.foo.bar.num }}</h1> 
  <h1>{{ person.name }}</h1>
  case:4 <input type="text" v-model="person.foo.bar.num">
  case:5 <input type="text" v-model="person.name">
  <A v-move="{background:'blue'}"></A>
</template>
<script setup lang='ts'>
import A from "./components/A.vue";
import { ref, watch,Directive} from 'vue'
// 1、watch监听值的变化 -参数-两个 监听的响应式数据-回调函数-新值-旧值
//    1）单个的话，直接使用变量名就可以
//    2）多个的话，使用数组包裹
//    3)ref对象时需要开启 deep:true
//    4)reactive对象 不需要，vue默认开启了
// 基础类型
let message = ref('john wick');
let message2 = ref('evan zhe')
let count = ref(0)
// 引用类型
let person = ref({
  name:'rabbit',
  foo:{
    bar:{
      num:2
    }
  }
})
// 监听多个值时
watch([message, message2],(newVal, oldVal) =>{
  // 监听值的变化
  console.log(newVal, oldVal);
  
});
// 监听一个值
watch( message2,(newVal, oldVal) =>{
  // 监听值的变化
  console.log(newVal, oldVal);
  
});
watch(()=>person,(newVal, oldVal) => {
    console.log(newVal, oldVal);
},)
const vMove:Directive = {
  created(){
        console.log('=======> created');
      },
      beforeMount(){
        console.log('=====>beforeMount');
      },
      mounted(...args) {
        console.log('====>mounted');
        console.log(args);
      },
      beforeUpdate(){
        console.log('=====>beforeUpdate');
      },
      updated(){
        console.log('====>updated');
      },
      beforeUnmount(){
        console.log('=====>beforeUnmount');
      },
      unmounted(){
        console.log('=====> unmounted');
      }
};
</script>
<style scoped>
</style>