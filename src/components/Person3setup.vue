<template>
    <div class="person">
        <h2>命名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
        <h2>{{car.brand}}汽车的价格：{{car.price}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <button @click="changePrice">修改价格</button>
    </div>
    <ul>
        <li v-for="item in games" :key="item.id">{{item.name}}</li>
    </ul>
    <hr>
</template>

<!-- 
如何修改组件名称？
1，Vue2中有name属性
2，Vue3没有定义组件名称的属性，虽然一般组件名和文件名称是一致的
    * 直接写两个scipt标签
    * npm -i vite-plugin-vue-setup-extend
       * <script setup lang="ts" name="Person234">
3，为什么会出现组件名称和文件名不一样的情况？每个组件一个目录，vue组件都是index.vue(和开发模式相关)
-->

<!-- setup语法糖: 直接写setup函数中的内容 -->
<script setup lang="ts">
    import {computed, reactive, ref} from 'vue'

    // 数据
    let name = ref("张三")
    let age = "18"
    let tel = "1388888888"

    // 方法
    function changeName(){
        name.value = 'zhangsan'
    }
    function changeAge(){
        age += 1 // 注意：这样修改age，页面是没有变化的
        console.log(age) // age确实改了，但是age不是响应式的
    }
    function showTel(){
        alert(tel)
    }    

    // ref一把梭 🤣
    // 如果需要一个基本类型，必须用ref
    // 如果需要一个响应式对象，并且层级不深，ref和reactive都可以
    // 如果需要一个响应式对象，并且层级比较深，推荐使用reactive

    // Vue2：数据代理、数据劫持

    // ref===>基本类型的响应式数据(可以定义：基本类型+对象类型)
    // 模板里不需要写name.value，但是script里必须写name.value
    // RefImpl: 如果使用ref包裹一个对象类型，实际上ref底层还是用reactive来包裹对象类型

    // reactive===>对象类型的响应式数据(只能定义：对象类型)
    // Proxy(Object)
    // reactive重新分配一个新对象，会失去响应式（可以使用Object.assign整体区替换），无法替换整个对象

    let car = reactive({
            brand: '奔驰',
            price: 100,
    })
    let games = reactive([
        {"id": 1, "name": "原神"},
        {"id": 2, "name": "三国志"},
        {"id": 3, "name": "王者荣耀"},
    ])
    function changePrice(){
        car.price += 10

        // 不能直接赋值，相当于指向新的对象，页面不会更新
        // car = {brand: '宝马', price: 200} ❎
        // car = reactive({brand: '宝马', price: 200}) ❎

        // 下面是一种技巧，但是不推荐，只是批量修改属性，并没有换成新的对象
        // Object.assign(car, {
        //     brand: '宝马',
        //     price: 200,
        // })
    }
</script>