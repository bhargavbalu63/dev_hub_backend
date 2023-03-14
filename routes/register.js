
const express= require("express")
const router= express.Router()

const devuser= require("../usermodel")

router.get("/register",  async (req,res)=>
{
    const data= await devuser.find()
     return res.status(200).send({
        status:"success",
        data:data
    })
})



router.post("/register", async (req,res)=>
{
    try
    {
 const {fullname, email, mobile,skill, password, confirmpassword }= req.body

 const exist= await devuser.findOne({email})
 if(exist)
 {
    return res.status(400).send("user exist")
 }
 if(password!=confirmpassword)
 {
    return res.status(403).send("password didnt match")
 }
 const newUser=  await devuser.create({
    fullname:fullname,
     email:email,
      mobile:mobile,
      skill:skill,
       password:password,
        confirmpassword:confirmpassword
 })


 return res.status(200).send({
    data:newUser
   
    
 })
    }
    catch(err)
    {
         console.log(err);
         return res.status(500).send({
            status:"failed",
            message:err
         })
    }
})
module.exports=router