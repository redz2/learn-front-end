// 动画的本质：在一段时间内，从一个状态，变化到另一个状态
function animation(duration, from, to, onProgress){
    // 这里演示的是一个linear
    const dis = to - from
    const speed = dis / duration
    const startTime = Date.now()
    let value = from 
    onProgress(value)

    // 根据当前的值去修改页面
    function _run(){
        // 计算出当前的时间
        const now = Date.now()
        const time = now - startTime
        // 计算出当前的值
        const d = time * speed
        value = from + d
        onProgress(value)

        // 何时停止
        if(time >= duration){
            // 停止时，让值等于最终值
            value = to 
            onProgress(value)
            return
        }else{
            // 每隔一段时间就去绘制下，与屏幕刷新时间一致
            // setInterval()
            requestAnimationFrame(_run)
        }
    }

    // 下一次页面绘制时调用
    requestAnimationFrame(_run)
}

// CSS动画：CSS属性值变化
// JS动画：canvas、数字跳动、其他变量值变化