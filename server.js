const express= require("express")

const app= express()

const bodyparse= require("body-parser")
const cors= require("cors")
app.use(express.json())
app.use(bodyparse.json())
app.use(cors({origin:'*'}))
const mongoose= require("mongoose")
const addreview= require("./routes/addreview")
const allprofiles= require("./routes/allprofiles")
const login= require("./routes/login")
const myprofile= require("./routes/myprofile")
const myreview= require("./routes/myreview")
const register= require("./routes/register")


app.use("/",addreview )
app.use("/",allprofiles )
app.use("/",login )
app.use("/",myprofile )
app.use("/",myreview )
app.use("/",register )





mongoose.connect('mongodb+srv://devhub:9848032919@devcluster.f1wocyv.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on("connected",()=>console.log("connected to db"))


app.listen("5000", ()=>console.log("app running"))
