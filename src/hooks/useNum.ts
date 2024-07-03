// 把函数和数据都写在这，并且数据和函数都必须写在一个函数中
import {computed, onMounted, ref} from 'vue'
export default function(){
    // 数据
    let num = ref(0)
    let bigNum = computed(()=>{
        return num.value * 10
    })
    // 方法
    function Add(){
        num.value += 1
    }
    // 钩子
    onMounted(()=>{
        Add()
    })
    // 返回数据和方法
    return {
        num,
        bigNum 
    }
}

// 上面就是组合式API
