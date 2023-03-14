
const express= require("express")
const router= express.Router()
const reviewmodel= require("../reviewmodel")
const middleware= require("../middleware")



router.post("/addreview", middleware, async(req,res)=>
{

try
{
const {taskworker, rating} = req.body
const exist= await devuser.findById(req.user.id) //req.user.id comes from middleware
const newreview=  await reviewmodel.create({
    taskprovider:exist.fullname,
    taskworker:taskworker,
    rating:rating
})

return res.status(200).send({
    status:"status updated",
    newreview:newreview
})


}
catch(err)
{
    console.log(err);
    return res.status(500).send("server error")
    
}



})
module.exports= router