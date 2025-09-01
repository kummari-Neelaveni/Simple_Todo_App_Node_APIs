const express=require("express");
const app=express();
const todoRouter=require("./routes/todoroutes.js")
const {connectDB}=require("./confog/db.js")
const cors=require("cors")
connectDB()
// middleware
app.use(express.json());
app.use(express.urlencoded());

// cors middleware
app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","GET",]
}));

// apis
app.get("/",(req,res)=>{
    res.status(200).send("hi im good");
})
app.use("/api/todos/", todoRouter);


app.listen(3000,()=>{console.log("server started on 3000")})
