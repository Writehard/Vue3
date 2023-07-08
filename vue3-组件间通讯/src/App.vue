<template>
<div>
    <h1>我是父组件</h1>
    <hr>
    <HeaderNav ref="header" :title="name" :arr="[1, 2, 3]" @on-demo="getName" @on-click="getrename"></HeaderNav>
    <h1>{{ header?.name }}</h1>
    <button @click="header?.oper">点击调用子组件的方法</button>
</div>
</template>
<script setup lang='ts'>
import { ref } from "vue";
import HeaderNav from './components/HeaderNav.vue';
let name = 'wick';
// const getName = (name,) =>{
//     console.log(name,'我是父组件')
// }
// const getrename = (rename) =>{
//     console.log(rename,'我是父组件')
// }
// 使用子组件的属性和方法
const header = ref<InstanceType<typeof HeaderNav>>()
header.value?.oper()
</script>
<style scoped>

</style>