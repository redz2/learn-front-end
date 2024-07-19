<template>
        <h3>祖父</h3>
        <div>{{ a }}</div>
        <div>{{ b }}</div>
        <div>{{ c }}</div>
        <div>{{ d }}</div>
        <button @click="()=>{ a = a + 1}">点我</button>
        <Father v-bind="{a:a,b:b,c:c,d:d}"></Father>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import Father from './Father.vue'

let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)
</script>

<style scoped>
</style>

<!-- 
爷爷传递给爸爸，但是爸爸不要（没有声明props，传递的变量和函数都在$attr中），直接就给孙子了

爷爷和孙子的数据传递和props完全一致，可以实现数据互传
-->