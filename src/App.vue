<template>
  <!-- 
  如何使用组件标签？
    <Person />
    <Person3 />
    <Person3setup /> 
  -->

  <!-- 
    如何判断传入的是字符串还是变量？
    普通的属性 vs v-bind属性绑定 
  -->
  <!-- <Child a="从父组件传到子组件的字符串" :list="PersonList"/> -->

  <!--  active-class：被激活时的类名 -->
  <!-- <router-link to="Child" active-class="red">子组件</router-link>
  <RouterView /> -->
  <Father2></Father2>
</template>

<style scoped>

</style>

<script lang="ts" setup>
// 导入组件
// import Person from '@/components/Person.vue'
// import Person3 from '@/components/Person3.vue'
// import Person3setup from '@/components/Person3setup.vue'
import Father2 from '@/learn/vue.js/vue3/组件通信/06_$refs和$parent/Parent.vue'
// import Father2 from '@/learn/vue.js/vue3/组件通信/03_mitt/Father.vue'
// import Father2 from '@/learn/vue.js/vue3/组件通信/05_$attr/GrandFa.vue'

import { reactive } from 'vue';

// 引入routerview
import { RouterView,RouterLink } from 'vue-router';

// Vue2声明式API写法
// export default {
//   name: 'APP', // 组件名
//   components: {
//     Person,
//     Person3,
//     Person3setup,
//   } // 注册其他组件
// }
</script>
