var http=require("http")//create a server object
http.createServer(function(req,res){
    //set status  + header
    res.writeHead(200,{'content-type':'text/html'})
    //write response body
    res.write('<h1> hello </h1>')
    //end response
    res.end()
}).listen(8080,()=>{//port is must be give above 3000
    console.log('server is running at http://localhost:8080')
})


