import mitt from 'mitt'

// 调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter = mitt()

// // 绑定事件
// emitter.on("test01", ()=>{
//     console.log("test01被触发了")
// })
// emitter.on("test02", ()=>{
//     console.log("test02被触发了")
// })

// // 触发事件
// setInterval(()=>{
//     emitter.emit('test01')
//     emitter.emit('test02')
// },1000)

// // 关闭事件
// setTimeout(()=>{
//     // emitter.off('test01')
//     emitter.all.clear()
// },10000)

export default emitter



// export default mitt()