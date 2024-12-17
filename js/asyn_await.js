   var fs = require('fs')

function readFileAsync() {
    return new Promise(function(resolve, reject){
   fs.readFile("aklkdn.txt","utf-8",function(err,data){
    if(err){
        reject("File not found")
    }else{
        resolve(data)
    }
   })
    })
}

readFileAsync().then(function(x){
    console.log("File has saved");
}).catch(function(e){
    console.log(e);
    
})