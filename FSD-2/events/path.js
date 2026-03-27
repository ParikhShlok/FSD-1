var pm=require('path')
path=pm.dirname("D:\fsd>");
console.log(path);
path=pm.basename("D:\fsd\copy.js");
console.log(path)
path=pm.extname("D:\fsd\copy.js")
console.log(path)
path=pm.parse("D:\fsd\copy.js")
console.log(path)
if(path.ext=='.txt'){
    console.log('text docs')
}
else{
    console.log('not a text docs')
}