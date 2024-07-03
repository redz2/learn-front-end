<template>
    <div class="person">
        <h2>命名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',
        data(){
            return {
                name: '张三',
                age: 18,
                tel: '13888888888'
            }
        },
        methods: {
                changeName(){
                    this.name = 'zhangsan'
                },
                changeAge(){
                    this.age += 1
                },
                showTel(){
                    alert(this.tel)
                }
        },
        watch:{

        },
        computed: {

        }
    }
</script>