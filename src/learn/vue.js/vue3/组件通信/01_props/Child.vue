<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>儿的玩具：{{ toy }}</h4>
        <h4>父给儿的车：{{ car }}</h4>
        <!-- 子元素直接调用父元素传递过来的函数 -->
        <button @click="sendToy(toy)">把玩具给父亲</button>
        <hr>
        <h4>父给的personlist</h4>
        <ul>
            <li v-for="person in persons" :key="person.id">
                {{ person.name }}: {{ person.age }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// props
// 目的：接收父元素的参数


import {ref} from 'vue'
let toy = ref("变形金刚")

// 声明接收props（使用最多！！！）
// car是变量
// sendToy是函数

// 1. 通过数组接收数据 
defineProps(['car', 'sendToy','persons'])

// 2. 接收数据 + 限制类型 (TS写法)
// import {type Persons} from '@/types'
// defineProps<{person:Persons,car:string,sendToy:Function}>()

// 3. 接收数据 + 限制类型 + 限制必要性 + 指定默认值
// withDefaults(defineProps<{persons?:Persons,car?:string,sendToy?:Function}>(),{
//     // 默认值: 不能直接写数据，必须写函数，返回一个数组
//     persons: ()=> [{'id': 'defaultid', 'name': 'defeaultname', 'age': 18}],
//     car: "lixiang",
//     // 函数默认值咋写呢？
// })

// 4. 接收数据，并把props保存起来
// let props = defineProps([
//     "x", "y"
// ])
</script>