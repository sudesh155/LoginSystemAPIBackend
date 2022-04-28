const auth=require("../middleware/auth")
const{createuser,getuser,putuser,deleteuser}= require("../controler/usercontroler")
const {login}=require("../controler/logincontrolerr")
const express=require("express")
const rout=require("express").Router()
const db=require("../DB/userdb")
rout.post("/insert" , async (req,res)=>{
    try {
        const result = await createuser(req.body)
        if(result.errors){
            res.status(400).json({errors:true, message:result.message})
        }
        else{
            res.status(200).json({errors:false, data:result.data})
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

rout.get("/get",auth , async (req,res)=>{
    try {
        const result = await getuser()
        if(result.errors)
        {
           res.status(400).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
rout.put("/put/:id", async (req, res)=>{
    try {
        const id=req.params.id
        const result = await putuser(id, req.body)
        if(result.errors)
        {
          res.status(400).json({errors:true, message:result.message})
        }
        else{
            res.status(200).json({errors:false, data:result.data})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
rout.delete("/delete/:id", async (req,res)=>{
    try {
        const id=req.params.id
        const result= await deleteuser(id,req.body)
        if(result.errors)
        {
             res.status(400).json({errors:true, message:error.message})
        }

        
    } catch (error)
     {
        res.send(400).json({message:error.message})
    }
})
rout.post("/login" , async (req,res)=>{
    try {
        const result = await login(req.body)
        if(result.errors){
            res.status(400).json({errors:true, message:result.message})
        }
        else{
            res.status(200).json({errors:false, data:result.data})
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
module.exports=rout