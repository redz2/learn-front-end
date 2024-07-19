<template>
    <Child name="从父组件传递给子组件的字符串" :list="PersonList"/>
</template>

<script lang="ts" setup>
// 导入组件
import Child from '@/components/Child.vue'

import { reactive } from 'vue';
import { type Persons } from '@/types';

// js写法
// let PersonList = reactive([
//     {'id': "sdas1", "name": "zhouyi", age: 17},
//     {'id': "sdas2", "name": "zhouyan", age: 18},
//     {'id': "sdas3", "name": "zhousy", age: 19}
// ])

// ts写法
// 1. 第一种定义变量的写法
// let PersonList:Persons = reactive([
//     {'id': "sdas1", "name": "zhouyi", age: 17},
//     {'id': "sdas2", "name": "zhouyan", age: 18},
//     {'id': "sdas3", "name": "zhousy", age: 19}
// ])

// 2. 这是更优雅的写法，在reactive中直接传泛型
let PersonList = reactive<Persons>([
    {'id': "sdas1", "name": "zhouyi", age: 17},
    {'id': "sdas2", "name": "zhouyan", age: 18},
    {'id': "sdas3", "name": "zhousy", age: 19}
])
</script>
  
<style>
</style>