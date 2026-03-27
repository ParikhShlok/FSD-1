var u = require("url");
process.noDeprecation = true;
ps=require("fs");
var addr = "https://localhost:8080/default.html?m1=50&m2=30&m3=80";
var q = u.parse(addr, true);
console.log(q);

var m1=parseInt(q.query.m1);
var m2=parseInt(q.query.m2);
var m3=parseInt(q.query.m3);
var avg = (m1+m2+m3)/3;
console.log("Average:",avg);