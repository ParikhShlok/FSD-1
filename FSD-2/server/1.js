var u=require('url')
process.noDeprecation=true;
var addr='https://localhost:8080/default.html?year=2025&month=feb'
var q=u.parse(addr,true)
console.log(q)

var qdata=q.query;
console.log(qdata.year)
if(qdata.year%4==0){
    console.log("Leap year ╰(*°▽°*)╯")
}
else{
    console.log("not a leap year (❁´◡`❁)")
}

