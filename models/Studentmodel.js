const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    Rollnumber:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true},
})

const Student =mongoose.model('Student',studentSchema);
module.exports=Student;