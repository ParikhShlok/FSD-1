const EventEmitter = require("events");
ee = new EventEmitter();

var Listener1= function listener1(){
    console.log("Listener1 Executed");
}
var Listener2=function listener2(){
    console.log("Listener2 Executed");
}
ee.on("conn",Listener1);
ee.on("conn",Listener2);
let count=ee.listenerCount("conn");
console.log("Count1:"+count);
ee.emit("conn");