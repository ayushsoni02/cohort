const express = require('express');
const bodyParse = require('body-parser');


const app = express();

app.use(bodyParse.json());

app.post("/sum",function(req,res) {
    console.log(req.body);
    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a+b,
    });
});

app.listen(3000);