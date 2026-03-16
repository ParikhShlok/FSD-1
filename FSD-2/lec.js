var ps=require("fs");
//ps.mkdirSync("node");
ps.writeFileSync("node/write.txt","Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
ps.appendFileSync("node/write.txt","Welcome!")
data=ps.readFileSync("node/write.txt","utf-8");
console.log(data);
console.log(data.toString());
ps.renameSync("node/write.txt","node/read.txt");
ps.copyFileSync("node/read.txt","node/copyread.txt");
ps.unlinkSync("node/read.txt");
ps.unlinkSync("node/copyread.txt");
ps.rmdirSync("node/");