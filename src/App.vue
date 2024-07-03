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
  <Child a="从父组件传到子组件的字符串" :list="PersonList"/>

  <!--  active-class：被激活时的类名 -->
  <router-link to="Child" active-class="red">子组件</router-link>
  <RouterView />
</template>

<style scoped>

</style>

<script lang="ts" setup>
// 导入组件
// import Person from '@/components/Person.vue'
// import Person3 from '@/components/Person3.vue'
// import Person3setup from '@/components/Person3setup.vue'
import Child from '@/components/Child.vue'
import { reactive } from 'vue';

// 引入routerview
import { RouterView,RouterLink } from 'vue-router';

import { type PersonInter,type Persons } from '@/types';
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
