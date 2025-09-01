const mongoose=require("mongoose");

const todoschema= new mongoose.Schema({
    title:{type:String,
        required:true,
        unique:true,
        trim:true,
        uppercase:true,
        minLength:3},

    body:{type:String,
         required:true,
         trim:true,
         minLength:2} ,

    },{timestamps:true});

    const TOdoModel=mongoose.model("todos",todoschema)

    module.exports={TOdoModel}