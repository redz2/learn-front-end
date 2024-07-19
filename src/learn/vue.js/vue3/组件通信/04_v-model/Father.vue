<template>
    <div class="fathter">
        <h3>父组件</h3>
        <!-- v-model 用在html标签上 -->
        <!-- <input type="text" v-model="username"> -->

        <!-- v-model原理：动态value值，配合input事件 -->
        <!-- 处理ts报错，断言是一个HTMLInput元素 -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

        <!-- v-model 用在组件标签上 -->
        <AtGuiguInput v-model="username"></AtGuiguInput>
        <!-- 自定义事件，$event就是传递过来的数据 -->
        <!-- <AtGuiguInput :modelValue="username" @update:modelValue="username = $event"></AtGuiguInput> -->

        <!-- 可以修改modelValue吗？ -->
        <!-- <AtGuiguInput v-model:xxxyyy="username"></AtGuiguInput> -->

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import AtGuiguInput from './AtGuiguInput.vue'

let username = ref("zhangsan")
</script>

<!-- 
一脸懵逼 
$event到底是啥？
对于原生事件，$event就是事件对象
对于自定义事件，$evet就是触发事件时所传递的数据

1. v-model是简写形式
v-model === 属性值 + 自定义事件（v-model只是简写，如果真的只是单纯需要父传子，子传父，props完全就够了）
2. 如何让父亲的username显示到儿子的input框
3. 如何让儿子input框中的数据更新父亲的username
4. 数据流：
父组件 ===> 输入 ===> 子组件 ===> 输出 ===> 父组件
-->