var ps=require("fs");
ps.writeFileSync("source.txt","ABC");
data=ps.readFileSync("source.txt","utf-8");
ps.writeFileSync("destination.txt",data);
data1=ps.readFileSync("destination.txt","utf-8");
console.log(data1);
