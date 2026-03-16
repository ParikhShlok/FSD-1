const student=[
    {name:"abc",age:30},
    {name:"deg",age:30}
]
var ps=require("fs");
ps.writeFileSync('student.txt',JSON.stringify(student));
data=ps.readFileSync("student.txt","utf8")
b=JSON.parse(data);
console.log(b);