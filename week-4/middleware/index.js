const express = require('express')

const app = express()

// normal function call to check the validity 
function ageisOldEnough(age){
    if(age >= 14){
        return true;
    }else{
        return false;
    }
}

// done with using the middlewares
function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age
    if(age >= 14){
        next();
    }else{
        res.status(411).json({
            msg:"sorry you are not eligible"
        }) 
    }
}


  // this is the another way to do that 
  app.use(isOldEnoughMiddleware);


// one way to do this is to pass it the below call
app.get("/ride2",function(req,res){
    if(ageisOldEnough(req.query.age)){
        res.json({
            msg : "You have successfully riden the ride2"
        })
    }
})

app.get("/ride1",function(req,res){
    if(ageisOldEnough(req.query.age)){
        res.json({
            msg : "You have successfully riden the ride1"
        })
    }
})                                                                                                                                                                                                                                                                                                                                      

// one of the other way to that is to write it as below mentioned                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
app.get("/ride1",isOldEnoughMiddleware,function(req,res){
    if(ageisOldEnough(req.query.age)){                                                                                                                                                                                                                                                                                                                       
        res.json({
            msg : "You have successfully riden the ride1"
        })
    }
})



const port = 3000
app.listen(port,()=>{
    console.log("execute successfully ");
});