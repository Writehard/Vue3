<template>
    <div class="left">
        <div class="header">
            <h1>我是页面2.子组件</h1>
            <h2>我是reactive的示例</h2>
            <h4>{{ person.name }}</h4>
            <ul>
                <li v-for="item in arr" :key="item">{{ item }}</li>
            </ul>
            <button @click="chanArr">修改</button>
        </div>
        <hr>
        <div class="main">
        <h2>深层数据</h2>
        <ul>
            <li v-for="item in friuts" :key="item">{{ item.name }} --{{ item.num }}</li>
        </ul>
        <button @click="addArr">添加</button>
        </div>
    </div>
</template>
    
<script setup>
import { reactive, ref } from 'vue';
// 浅层次的数据
const person = reactive({
    name: 'john wick'
})
let obj = {
    name:'wick',
    num:24
}
const arr = reactive([1, 2, 3])
const chanArr = () => {
    arr[0] = 'str'
    arr[1] = 'demo'
    arr[2] = 'test'
}
// 创建深层次的数据
const friuts = reactive([
    {
        name: "apple",
        num: 22
    },
    {
        name: "pear",
        num: 30
    },
    {
        name: 'watellon',
        num: 20
    },
])
const addArr = () => {
    friuts.push(obj);
    console.log(friuts, person);
}
const count = ref(1);
const obj2 = reactive({})
obj2.count = count
console.log(obj2.count);
console.log(obj2.count === count.value);
</script>

<style scoped>
.left {
    width: 50%;
    margin-left: 20px;
    border: 1px solid black;
    display: flex;
}
</style>