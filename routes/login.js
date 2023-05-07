
const express= require("express")
const router= express.Router()
const devuser= require("../usermodel")

const jwt = require("jsonwebtoken")

router.post("/login", async (req,res)=>
{
    try
    {
         const {email, password}= req.body
         const exist= await devuser.findOne({email})
         if(!exist)
         {
            return res.status(400).send("user not registered")
         }
         if(password!= exist.password)
         {
            return res.status(400).send("password mismatch")
         }
         let payload= {
            user:{
                id:exist.id
            }
         }
            jwt.sign(payload, 'jwtpassword', {expiresIn:3600000}, 
            (err,token)=>
            {
                if(err) throw err
                return res.json({token})
            })

    }
    catch(err)
    {

        console.log(err);
        return res.status(500).send({
            status:"failed"
        })
        
    }
})
module.exports=router