const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Database")
.then(() => {
    console.log("mongodb connected")
}
)
.catch(() => {
    console.log("failed")
}
)

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    PIN:{
        type:String,
        required:true
    },
    Fname:{
        type:String,
        required:true
    },
    Lname:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)
module.exports=collection