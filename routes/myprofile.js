const express= require("express")
const router= express.Router()

const devuser= require("../usermodel")
const middleware= require("../middleware")

router.get("/myprofile",middleware, async (req,res)=>
{
try
{
const user =await devuser.findById(req.user.id) //req.user.id comes from middleware, middleware always provides the id from user attribute
return res.status(200).json(user)

}
catch(err)
{

    return res.status(500).send(
        {
            status:"failed",
            error:err
        }
    )
}


})
module.exports=router