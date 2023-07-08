<template>
  <div>
    我是子组件
    <!-- <h2>{{ title }}</h2> -->
    <!-- <h3>{{ arr }}</h3> -->
    <button @click="send">给父组件传值</button>
  </div>
</template>
<script setup lang='ts'>
// 父给子
// 接受父组件传过来的值definProps
// 普通方式
// const props = defineProps({
//     title:{
//         type:String,
//         default:'默认值'
//     },
//     arr:{
//         type:Array,
//         default:[0,0,0]
//     }
// })
// console.log(props.title)
// ts方式
// const props = defineProps<{
//     title:string,
//     arr:number[]
// }>
// 子给父传递
// 第一种
// const emit = defineEmits(['on-demo'],['on-click']);
// 第二种ts
// const emit = defineEmits<{
//   (e:'on-click', name:string):void

//  }>()

// const send = () =>{
//   emit('on-demo','evan');
//   emit('on-click', 'evanzhe');
// }
// 第一步使用defineEmits进行
defineExpose({
  name:"wick",
  oper:()=>{
    console.log(1)
  }
})
</script>
<style scoped></style>