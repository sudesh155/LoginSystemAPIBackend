require("dotenv/config")
const express = require("express")
const mongoose = require("mongoose")
const abc = require("./rout/user_rout")
const app = express()
app.use(express.json())
app.get("/" , (req,res)=>{
    res.send("User Login");
})
app.use("/user_rout",abc)
app.listen(process.env.PORT || 5000 )
mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("data connected");
}) 