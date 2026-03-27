var EventEmitter=require('events');
var fs=require('fs');
var ee=new EventEmitter()

ee.on('write',function(){
    fs.writeFile('b.txt','hello',function(err){
        if(err) throw err
        console.log("data written")
        ee.emit("append");
    })
})

ee.on("append",function(){
    fs.appendFile('b.txt','good morning',function(err){
        if(err) throw err
        console.log("data append")
        ee.emit("read");
    })

})

ee.on("read",function(){
    fs.readFile('b.txt','UTF-8',function(err,data){
        if(err) throw err
        console.log("File content")
        console.log(data)     
    })

})

ee.emit('write')