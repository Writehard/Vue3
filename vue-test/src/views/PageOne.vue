<template>
    <div class="box">
        <h1>我是页面1，子组件</h1>
        <h3>我是响应式式数据---字符串</h3>
        <h4>{{ name }}</h4>
        <button @click="changeName">修改</button>
        <h3>我是响应式式数据---数字</h3>
        <h3>{{ num }}</h3>
        <button @click="changeNum">修改</button>
        <h3>我是响应式式数据---布尔值</h3>
        <h3>{{ bol }}</h3>
        <button @click="changeBol">修改</button>
        <h3>我是响应式式数据---对象</h3>
        <h3>第一层--{{ obj.name }}--第二层--{{ obj.person.name }}--第三层--{{ obj.person.cat.name }}</h3>
        <button @click="changeObj">修改</button>
        <h3>我是响应式式数据---数组</h3>
        <h3>二维数组--{{ arr[0] }}--二维数组--{{ arr[1] }}--正常--{{ arr[2] }}</h3>
        <button @click="changeArr">修改</button>
    </div>
</template>
<script setup>
import { reactive, ref, shallowRef } from 'vue';
let name = ref('john wick');
let num = ref(23);
let bol = ref(true);
let obj = reactive({
    name:'wick',
    person:{
        name:"evan",
        cat:{
            name:'tom'
        }
    }
});
let arr = reactive([[1,2],[3,4],1,2,3]);
// 注 ref的数组修改不能和shallowRef
const changeName = () => {
    console.log(name);
    name.value = 'evanzhe';
}
const changeNum = () =>{
    console.log(num);
    num.value = 23;
}
const changeBol = () =>{
    console.log(bol);
    bol.value = false
}
const changeObj = () =>{
    console.log(obj);
    obj.name = 'wickzhe';
    obj.person.name = 'evanzhe';
    obj.person.cat.name = 'jerry'
}
const changeArr = () =>{
    console.log(arr);
    arr.value[0] = ['wick数组','evan数组'];
}


</script>
<style scoped>
.box {
    width: 50%;
    border: 1px solid black;
}
</style>
