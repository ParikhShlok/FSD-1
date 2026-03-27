var u=require('url')
var ps=require('fs')
process.noDeprecation=true;
var addr='https://localhost:8080/default.html?year=2025&month=feb'
var q=u.parse(addr,true)
console.log(q)

var qdata=JSON.stringify(q.query)
ps.writeFile('t1.txt',qdata,(err)=>{
    console.log("completed")
})
