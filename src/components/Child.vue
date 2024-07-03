<template>
    <div>
        {{ a }}
        <ul>
            <!-- v-for 需要绑定一个key -->
            <li v-for="value,key in list" :key="key">
                {{ value.name }} {{ value.id }} {{ value.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
// define开头的函数不需要引入就可以直接用😄
// import { defineProps } from 'vue';

import { type Persons} from  '@/types'

// 接收数据 
// defineProps([
//     'a',
// ])

// 接收数据 + 限制类型 (TS写法)
// defineProps<{list:Persons}>()

// 接收数据 + 限制类型 + 限制必要性 + 制定默认值
withDefaults(defineProps<{list?:Persons,a?:string}>(),{
    list: ()=> [{'id': 'defaultid', 'name': 'defeaultname', 'age': 18}],
    a: "zhouyi"
})

// 接收数据，并把props保存起来
// let x = defineProps([
//     "x", "y"
// ])
</script>

<style scoped>

ul::marker {
    /* 选中列表前的小圆点 */
    color: greenyellow;
}
</style>