const express = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Ayush1234";

const app = express();

app.use(express.json());

const users = [];

function logger(req,res,next){
    console.log(req.method + "request came");
    next();
}


app.get("/",function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup",logger,function(req,res) {
 const username = req.body.username;
 const password = req.body.password;

users.push({
    username:username,
    password:password
})

res.json({
    message:"You are signed in"
})

});

app.post("/signin",logger,function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            foundUser = users[i];
        }

    }
        if(foundUser){
            const token = jwt.sign({
                username:username
            },JWT_SECRET);
            res.json({
             token: token
            })
        }else{
            res.status(403).json ({
                message:"Invalid username or password"
            })
        }
    
});

function auth(req,res,next){
    const token = req.headers.token;
    const decodeData = jwt.verify(token,JWT_SECRET);

    if(decodeData.username){
        req.username = decodeData.username;
        next();
    }else{
        res.json({
            message:"you are not signedin"
        })
    }
}

    


app.get("/me",logger,auth,function(req,res) {

    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username == req.username){
            foundUser = users[i];
        }
    }

        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
});


// app.get("/todo",logger,auth,function(req,res) {

// })


app.listen(3000);