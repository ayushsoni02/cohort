const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");

function adminMiddleware(req,res,next){
  const token = req.headers.token;


  try{
    const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD);
    req.userId = decoded.id;
    console.log("decode userId:",decoded.id);
    next();    
  }catch(error){
     return  res.status(403).json({
        message:"Invalid or expired token",
        error:error.message
     })
  }

}

 //get not working properly make look at this or try to improve it  

module.exports = {
    adminMiddleware:adminMiddleware
}