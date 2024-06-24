const express =require("express")
const  collection=require("./mongo")
const cors =require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/login",cors(),(req,res)=>{

})
app.post("/login",async (req,res)=>{
    const{email,PIN}=req.body

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }

    }
    catch(e){
        res.json("not exist")

    }
})
app.post("/",async (req,res)=>{
    const{email,PIN,number,Fname,Lname}=req.body

    const data={
        email:email,
        PIN:PIN,
        number:number,
        Fname:Fname,
        Lname:Lname,
    }

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("notexist")

    }
})

app.listen(3000,()=>{
    console.log("port connected")
})