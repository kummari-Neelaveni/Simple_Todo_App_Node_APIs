
const {TOdoModel}=require("../models/todoshema.js")

const getAlltodos=async (req,res)=>{
    try{
        const todosdata=await TOdoModel.find();
        res.status(200).json({message:"todos",data:todosdata})
    }
    catch(error){
    console.log(error.message)
    res.status(400).json({message:"unable to get todo information"})

    }
}
    
const gettodo=(req,res)=>{
    res.send("gettodo")
};

const addtodo=async (req,res)=>{
    try{
        const {title,body}=req.body
        const newTodo=new TOdoModel({title:title,body:body})
        const result=await newTodo.save()
        res.status(200).json({messgae:"todo added successfully",todo:result})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({message :"failed to add new todo"})

    }
};

const updatetodo=async(req,res)=>{
    try{
        const id=req.params.id.trim()
    const {title,body}=req.body
    const updatetodo=await TOdoModel.findByIdAndUpdate(id,{title:title,body:body},{new:true})
    res.status(200).json({message:"todo updated successfully",todo:updatetodo})

    }
    catch(error){
        console.log(error.message,"update failed")
        res.send("update todo is failed")
    }
    
}
const deleteTodo=async(req,res)=>{
    try{
        const id=req.params.id.trim();
        const deletetodo=await TOdoModel.findByIdAndDelete(id)
        res.status(204).json({message:"todo deleted suceessfully",todo:deleteTodo});
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({message:"failed to deleted"})
    }    
};

module.exports={getAlltodos,gettodo,addtodo,updatetodo,deleteTodo}
