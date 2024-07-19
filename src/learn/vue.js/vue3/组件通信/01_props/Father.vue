<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>父的汽车: {{ car }}</h4>
        <h4 v-show="toy">儿给父的玩具：{{ toy }}</h4>
        <Child :car="car" :sendToy="getToy" :persons="PersonList"></Child>
    </div>
</template>

<script setup lang="ts">
import Child from '@/learn/vue.js/vue3/组件通信/01_props/Child.vue';
import { ref } from 'vue'

// 数据
// 父亲把数据传给儿子
let car = ref('奔驰')
let toy = ref('')

// 方法
// 1. 父亲把函数传给儿子
// 2. 儿子通过函数，以函数参数的形式把数据传给父亲
function getToy(value:string){
    console.log('父', value)
    toy.value = value
}

import { type PersonInter,type Persons } from '@/types';
import { reactive } from 'vue';
// 第一种定义变量的写法
// let PersonList:Persons = reactive([
//     {'id': "sdas1", "name": "zhouyi", age: 17},
//     {'id': "sdas2", "name": "zhouyan", age: 18},
//     {'id': "sdas3", "name": "zhousy", age: 19}
// ])

// 这是更优雅的写法，在reactive中直接传泛型
let PersonList = reactive<Persons>([
    {'id': "sdas1", "name": "zhouyi", age: 17},
    {'id': "sdas2", "name": "zhouyan", age: 18},
    {'id': "sdas3", "name": "zhousy", age: 19}
])

</script>


<!-- 

概述: props是使用频率最高的一种通信方式,
若父传子: 属性值是非函数。
若子传父: 属性值是函数。

-->