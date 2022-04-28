const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")         
const schemapath=require("../DB/userdb")
exports.login= async (users)=>{
    try {
        const userexits= await schemapath.findOne({email:users.email})
        if(!userexits){
            return {errors:true, message:"email or pass is envalid"}

        }
        let passexits= await bcrypt.compare(users.pass,userexits.pass)
        if(!passexits){
            return {errors:true, message:"email or pass is env"}
            
        }
        const token = await jwt.sign({_id:users._id},process.env.SEC)
        return {errors:false,data:{token:token,userexits:users}}
        
    } 
    catch (error)
     {
        return {errors:true,message:error.message}
    }

}