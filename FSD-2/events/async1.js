const fs=require('fs');
fs.writeFile('help.txt','hello/n',(err)=>{
    if(err) throw err;
    console.log("file created & data writter")
});
fs.appendFile('help1.txt','append data/n',(err)=>{
    if(err) throw err;
    console.log("data appended")
});
fs.readFile('help1.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log("\n file constents")
});
    


