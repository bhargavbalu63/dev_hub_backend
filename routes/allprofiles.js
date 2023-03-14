const express= require("express")
const router= express.Router()
const devuser= require("../usermodel")
const middleware= require("../middleware")
router.get("/allprofiles",middleware, async(req,res)=>
{
    try{
let allprofiles= await devuser.find()
return res.json(allprofiles)
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