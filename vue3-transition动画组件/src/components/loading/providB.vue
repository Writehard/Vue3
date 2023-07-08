<template>
    <div>
        <h1>provideB.vue {孙子级别}</h1>
        <div class="box"></div>
        <button @click="change">
            修改provide值
        </button>
        <hr>
    </div>
    </template>
    
    <script setup>
    import { reactive, ref, inject} from 'vue';
    const demo = inject('demo');
    const change = () =>{
        demo.value = 'blue'
    }
    
    </script>
    
    <style scoped>
    .box {
        height: 50px;
        width: 50px;
        border: 1px solid #ccc;
        background: v-bind(demo);

    }
    </style>