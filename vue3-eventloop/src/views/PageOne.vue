<template>
<div></div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
async function Prom() {
    console.log('Y')
    //微任务
    await Promise.resolve()
    console.log('X');
    
}
//宏任务
setTimeout(()=> {
    console.log(1);
    Promise.resolve().then(()=> {
        console.log(2);
    })
}, 0)
setTimeout(()=>{
    console.log(3);
    Promise.resolve().then(()=> {
        console.log(4);
    })
},0)
//微任务
Promise.resolve().then(()=> {
    console.log(5);
})
Promise.resolve().then(()=> {
    console.log(6);
})
Promise.resolve().then(()=> {
    console.log(7);
})
Promise.resolve().then(()=> {
    console.log(8);
})
Prom()
console.log(0);
//Y 0 5 6 7 8  X 1 2 3 4    
</script>

<style scoped>
</style>