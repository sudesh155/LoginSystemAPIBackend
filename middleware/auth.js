const jwt = require("jsonwebtoken");
//const rout=require("express").Router()
const auth = async (req, res, next) => {
    try {
        const token = req.header("auth")
        const varifyUser = await jwt.verify(token, process.env.SEC)
        if (!varifyUser) {
            res.status(400).json({ message: "invalid token" })
        }
        next()
    } catch (error) {
        res.status(400).json({ message: error.message })

    }


}
module.exports=auth