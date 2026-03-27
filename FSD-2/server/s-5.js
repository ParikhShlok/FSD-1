var http=require("http");
var fs=require("fs");
var url=require("url");
var u="https://www.google.com/exam.txt?c1=Hello & c2=FSD2 T1 Test & c3=Welcome to LJU #AllTheBest";
var p=url.parse(u,true);
var data=p.query.c1+"!\n"+p.query.c3+" "+p.query.c2+"\n"+p.query.hash;
fs.writeFileSync("."+p.pathname,data);
http.createServer((req,res)=>{
    if(req.url==="/home"){
        var d=fs.readFileSync("."+p.pathname,"utf-8");
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`<h1 style=color:red;>
            <pre> ${data}</pre></h1>`)
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`<h1 style="text-align:center;color:blue">About Page</h1>`);
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end(`<center>Page not Found <a href="http://localhost:8009/home">Home</a></center>`);
    }
}).listen(8009);