const express = require("express")
const app = express();

var users = [{
    name:'john',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]

app.use(express.json());

app.get("/",function(req,res){
const johnKidneys = users[0].kidneys;
const numberOfKidneys = johnKidneys.length;
let numberOfHealthyKidney = 0;
  for(let i=0;i<johnKidneys.length;i++){
    if(johnKidneys[i].healthy){
        numberOfHealthyKidney = numberOfHealthyKidney + 1;
    }
  }
  const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidney,
    numberOfUnhealthyKidney
  })
})

app.post("/",function(req,res){
const isHealthy = req.body.isHealthy;
users[0].kidneys.push({
    healthy: isHealthy
})
res.json({
    msg:"Done!"
})    
})

app.put("/",function(req,res){
for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
}    
res.json({});
})

app.delete("/",function(req,res){
 if(isThereAtleastOneUnhealthyKidney()){ const newKidneys = [];
  for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true
        })
    }
  }  
  users[0].kidneys = newKidneys;
  res.json({msg:"done"})}else{
    res.status(411).json({
      msg:"You have no bad kidneys"
    });
  }
})


app.listen(3000);


  