var http=require("http")//create a server object
http.createServer(function(req,res){
    //set status  + header
    res.writeHead(200,{'content-type':'application/json'})
    const data={
        'subject':'fsd',
        'topic':'node'
    }
    //end response
    res.end(JSON.stringify(data))
}).listen(8080,()=>{//port is must be give above 3000
    console.log('server is running at http://localhost:8080')
})