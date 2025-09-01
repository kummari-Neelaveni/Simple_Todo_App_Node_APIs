const express=require("express");
const router=express.Router();
const {
    getAlltodos,
    gettodo,
    addtodo,
    updatetodo,
    deleteTodo
}=require("../controllers/todocontroller.js")

router.get("/getAlltodos",getAlltodos);

router.post("/addtodo",addtodo);

router.put("/updatetodo/:id",updatetodo);

router.get("/gettodo/:id",gettodo);

router.delete("/deletetodo/:id",deleteTodo)


router.get("/getAlltodos",(req,res)=>{
    res.send("getalltodos")
});
router.post("/addtodo",(req,res)=>{
    res.send("add todo")
});
router.put("/updatetodo/:id",(req,res)=>{
    res.send("update todo")
});
router.get("/gettodo/:id",(req,res)=>{
    res.send("get todo by id")
});
router.delete("/deletetodo",(req,res)=>{
    res.send("delete todo")
});
module.exports=router;
