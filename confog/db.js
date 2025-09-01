const mongoose=require("mongoose");
 async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/",
            {dbName:"simple_todo_db",})
            console.log("database connected")


    }
    catch(error){
        console.log(error.message)
    }
}
module.exports={connectDB}