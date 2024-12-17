const express = require('express')

const app = express();

let requestCount = 0;

function requestIncreaser(){
  requestCount += 1;
  console.log(`Total number of count is ${requestCount}`);
}

app.get("/sum",function(req,res) {
    requestIncreaser();
const a = parseInt(req.query.a);
const b = parseInt(req.query.b);

res.json({
    answer:a+b
})
})

app.get("/div",function(req,res) {
    requestIncreaser();
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer:a/b
    })
})

app.listen(3000);