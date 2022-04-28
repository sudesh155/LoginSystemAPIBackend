const auth=require("../middleware/auth")
const userDB=require("../DB/userdb")
const bcrypt=require("bcrypt")
exports.createuser = async (userrout)=>{
    try {
        const emailExits= await userDB.findOne({email:userrout.email})
        if(emailExits)
        
        {
             return {errors:true ,message:"Already exits"}
        }
        let salt = await bcrypt.genSalt(10)
        const incriptedPass = await bcrypt.hash(userrout.pass,salt)
        const user_rout = await new userDB({f_nm:userrout.f_nm,l_nm:userrout.l_nm,email:userrout.email,pass:incriptedPass})
        const data = await user_rout.save()
        return {errors:false, data:data}

        
    } catch (error) {
        return {errors:true, message:error.message}
    }
}

exports.getuser = async ()=>{
    try {
        const data= await userDB.find()
        return {errors:false,data:data}
    } catch (error) {
        return {errors:true , message:error.message}
        
    }
}
exports.putuser = async (id,user_rout)=>{
    try {
        const data = await userDB.findByIdAndUpdate(id,user_rout,{new:true})
        return {errors:false, data:data}
    } catch (error) 
    {
        return {errors:true, message:error.message}
    }
}
exports.deleteuser = async (id,user_rout)=>{
    try {
        const data = await userDB.findByIdAndDelete(id, user_rout,{new:true})
        return {errors:false, data:data}
    } catch (error) 
    {
        return {error:true, message:error.message}
    }
}