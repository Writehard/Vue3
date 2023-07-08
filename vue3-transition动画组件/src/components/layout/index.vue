<template>
<div class="content">
    <button @click="flag = !flag">switch</button>
    <!-- 使用transition包裹 -->
    <!-- 可以自定义类名 -->
        <!-- <transition name="fade" enter-class="e-from" enter-active-class="e-active" enter-to-class="el-to">
            搭配name类名 
            <div v-if="flag" class="box"></div>
        </transition> -->
        <!-- <transition :duration="{enter:50, to:500}" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <div v-if="flag" class="box"></div>
        </transition> -->
        <!-- <transition
        @before-enter="EnterForm"
        @enter="EnterActive"
        @leave="Leave"
        >
            <div v-if="flag" class="box"></div>
        </transition> -->
        <transition
        appear
        appear-from-class="form"
        appear-active-class="active"
        appear-to-class="to"
        >
            <div v-if="flag" class="box"></div>
        </transition>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import 'animate.css'
import gsap from 'gsap'
const flag = ref(true);
const EnterForm = (el) =>{
    // el为当前的dom元素
    gsap.set(el,{
        weight:0,
        height:0
    })
    console.log('进入之前');
}
const EnterActive = (el, done) =>{
    gsap.to(el, {
        width:200,
        height:200,
        onComplete:done
    })
    // done表示被中断了
    // console.log('过度曲线');
    // setTimeout(() =>{
    //     done()
    // },3000)
}
// const EnterTo = (el) =>{
//     console.log('过度完成');
// }
// const EnterCancel = (el) =>{
//     console.log('过度效果被打断');
// }
// const LeaveForm = (el) =>{
//     // el为当前的dom元素
//     console.log('离开之前');
// }
const Leave = (el, done) =>{
    // done表示被中断了
    // console.log('离开过度曲线');
    // setTimeout(() =>{
    //     done()
    // },3000)
    gsap.to(el, {
        width:0,
        height:0,
        onComplete:done
    })
}
// const LeaveTo = (el) =>{
//     console.log('离开完成');
// }
// const LeaveCancel = (el) =>{
//     console.log('离开过度效果被打断');
// }
</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: red;
}
/* 创建之前 */
/* .e-from {
    width: 0;
    height: 0;
}
.el-active {
    transition: all 1.5s ease;
}
.el-to {
    width: 200px;
    height: 200px;
    transform: rotate(360deg);
}
创建之后 
.fade-leave-from {
    width: 200px;
    height: 200px;
    transform: rotate(360deg);

}
.fade-leave-active {
    transition: all 5s ease;
}
.fade-leave-to {
    width: 0;
    height: 0;
} */
.form {
    width: 0;
    height: 0;
}
.active {
    transition: all 2s ease;
}
.to {
    width: 200px;
    height: 200px;
}
</style>
<!-- 总结 
        transition-----八个勾子函数
        @before-enter="EnterForm"
        @enter="EnterActive"
        @after-enter="EnterTo"
        @enter-cancelled="EnterCancel"
        @before-leave="LeaveForm"
        @leave="Leave"
        @aftet-leave="LeaveTo"
        @leave-cancelled="LeaveCancel"
 @@@@@@@@@@@@@@@@@@
 切换组件的效果
-->
<!-- appear 首次加载的效果 -->