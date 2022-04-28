const mongoose=require("mongoose")
const blogScheme=mongoose.Schema({
    f_nm:String,
    l_nm:String,
    email:String,
    pass:String,
    create_dt:{type:Date,default:Date.now()},
    update_dt:{type:Date,default:Date.now()}

})
module.exports=mongoose.model("user1",blogScheme)