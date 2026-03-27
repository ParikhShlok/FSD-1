const EventEmitter=require("events")
ee=new EventEmitter()
var fun1=(msg)=>{
    console.log('message passed fun1 '+ msg)
}
var fun2=(msg)=>{
    console.log('message pased from fun2 '+msg)
}
ee.on('myevent1',fun1)
ee.on('myevent2',fun2)
ee.on('myevent1',fun1)
ee.on('myevent2',fun2)
// ee.removeListener("myevent1",fun1)//remove one event
ee.removeAllListeners('myevent1')
ee.emit('myevent2','university')
ee.emit('myevent1','lju')

