const fs=require('fs');
fs.writeFile('help.txt','hello\n',(err)=>{
if(err) throw err;{
    console.log('file created and datawritten')
}

fs.appendFile('help.txt','appended data\n',(err)=>{
    if(err) throw err;{
        console.log('data appended');
    }
fs.readFile('help.txt','utf-8',(err,data)=>{
    if(err) throw err;{;
    console.log('in file content');
    console.log(data);}
});
});
});