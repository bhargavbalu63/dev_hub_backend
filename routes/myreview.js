const express= require("express")
const router= express.Router()
const reviewmodel= require("../reviewmodel")
const middleware= require("../middleware")
router.get("/myreview", middleware, async(req,res)=>
{

try
{
  const allreviews= await reviewmodel.find()
  const myreview= allreviews.filter((review)=>review.taskworker.toString()===req.user.id.toString()) //req.user.id comes from middleware
  return res.status(200).json(myreview)
}
catch(err)
{
    console.log(err);
    return res.status(500).send("server error")
    
}



})
module.exports=router