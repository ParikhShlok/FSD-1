var fs=require("fs")
//Synchronous
fs.writeFileSync('test.txt','hello world')
console.log("synchronous write operation completed")
console.log("outside")
//Asynchronous
fs.writeFile('test1.txt','hello world',function(err){
    if(err){
        console.log("error generated"+err)
    }
    else{
        console.log(err)
        console.log("Asynchronous write operation completed")
    }
});
console.log("outside")