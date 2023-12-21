const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/sample").then(()=>{
    console.log("connect to mongoDB sucessfully")
}).catch((err)=>{
    console.log(err)
})

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number,
})

const Student = new mongoose.model("Student",student);
const adder = async()=>{
    // const ss = await Student.create({
    //     name:"shashiii",
    //     workout:true,
    //     height:6,
       
    // })
    const ss = await Student.find({height:{$eq:6}});
    console.log(ss)
    
}

adder();

