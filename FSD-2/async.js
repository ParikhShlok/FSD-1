const msg=function(){
    console.log("This content will be displayed after 3 sec");
}
setTimeout(msg,100);
setInterval(function(){
    console.log("This msg will display after 4 sec");
    
},100);
