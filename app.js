const express = require('express');
const app = express()












app.listen(3000,"localhost",(err)=>{
    if(!err){
        console.log("Server connected to port 3000");
    }
    else{
        console.log("Server error");
    }
})