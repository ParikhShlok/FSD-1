var fs=require("fs");
//sync--line wise run thase
fs.writeFileSync('test.txt','hello shlok');
console.log('syncronous write operation complted');
console.log('outside');
//async--min time valu pela aavse
fs.writeFile('test.txt','hello',function(err){
    if(err)
        console.log("error genrated "+err);
    
    else 
        console.log(err);
    console.log('async operation complrted')
    
});
console.log('outside');