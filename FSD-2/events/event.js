// const EventEmitter=require("events")
// ee=new EventEmitter()
// ee.on("start",(start,end)=>{
//     console.log(`started from ${start} to ${end}`)
// })
// ee.emit('start',1,100)
const EventEmitter=require("events")
ee=new EventEmitter()
ee.on("connection",function(){
    console.log(`connection successfull`)
    ee.emit("data recieved")
})
ee.on("data-received",function(){
    console.log("data received")
})
ee.emit("connection")
console.log("code run")