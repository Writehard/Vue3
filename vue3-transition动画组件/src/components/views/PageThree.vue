<template>
<div>
    <!-- 状态过渡 -->
    <input type="number" v-model="num.current" step="20">
    <div>
        {{ num.tweeenedNumber.toFixed() }}
    </div>
</div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import gsap from "gsap";
const num = reactive({
    tweeenedNumber:0,
    current:0
})
watch(()=>num.current,(newVal, oldVal)=>{
    gsap.to(num, {
        duration:1,
        tweeenedNumber:newVal
    })
})
</script>

<style scoped>
</style>