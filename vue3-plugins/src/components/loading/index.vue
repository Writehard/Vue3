<template>
    <div v-if="isShow" class="loading">
        Loading....
    </div>
</template>
    
    <script setup lang="ts">
    import { reactive, ref } from 'vue';
    let isShow = ref<boolean>(false)
    const show = ()=> {
        isShow.value = true
    }
    const head = ()=> {
        isShow.value = false
    }
    defineExpose({
        show,
        isShow,
        head
    })
    </script>
    
    <style scoped>
    .loading {
        background: black;
        opacity: 0.8;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: white;
    }
    </style>