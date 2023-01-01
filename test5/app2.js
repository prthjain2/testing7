const express = require("express");
const app2 = express()
app2.get("/",function(req,resp){
    resp.send("Whats up how u doing ");
})
app2.get("/login",function(req,resp){
    resp.send("make it !");
})
app2.listen(1111);
console.log("server is running on portno 1111");