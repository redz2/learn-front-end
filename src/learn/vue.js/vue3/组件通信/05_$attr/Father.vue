<template>
    <h3>父组件</h3>
    <!-- 父亲干了一件事情，把爷爷传的变量和函数都传给儿子 -->
    <Child v-bind="$attrs"></Child>
</template>

<script setup lang='ts'>
import Child from './Child.vue'
</script>

<style scoped>
</style>