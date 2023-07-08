<template>
  <div>
    {{ person }}
  </div>
  <div>
    <h1>测试toRef</h1>
    {{ like }}
  </div>
  <div>
    <h1>测试toRefs</h1>
    <p>{{ name }} - {{ age }} - {{ like }}</p>
  </div>
  <div>
    <button @click="change">修改</button>
  </div>
</template>
<script setup lang='ts'>
import { reactive, toRef,toRefs, toRaw } from 'vue';
      // 1、toRef只能修改相应对象的值， 非响应式- 视图毫无变化
      // 应用场景
      // 当对象的属性作为函数的参数时 把使用的属性结构出来
      // 2、toRefs 需要结构 reactive对象时，不能直接结构，直接结构的数据发生变化时，不会触发视图的更新
      // 3、toRaw 让对象脱离proxy
      const person = reactive({
        name:'wick',
        age:19,
        like:'beatiful girl'
      })
      // 把单独的属性提出来
    // const like = toRef(person, 'like')
    let {name, age, like} = toRefs(person);
    
      const change = () => {
        // person.like = 'quite girl';
        // like.value = 'quite girl'
        // console.log('ractive');
        // console.log(person)
        // console.log('---------');
        // // console.log(like)
        // console.log('@@@@@@');
        // console.log(name, age, like)
        person.name = 'evanzhe'
        console.log(name, toRaw(person));
        
      }
      // toRefs的源码实现
      // const toRefs = (object) => {
      //   const map = {}
      //   for (let key in object) {
      //       map[key] =  toRef(object, key)
      //   }
      //   return map
      // }
</script>
<style scoped></style>