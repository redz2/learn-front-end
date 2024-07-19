<template>
    <h3>子组件</h3>
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <div>{{ c }}</div>
    <div>{{ d }}</div>
</template>

<script setup lang='ts'>
// 直接接收爷爷传的数据
defineProps(['a','b','c','d'])
</script>

<style scoped>
</style>