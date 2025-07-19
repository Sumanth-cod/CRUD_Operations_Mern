const student=require('../models/Studentmodel');

const getAllStudents=async(req,res)=>{
    try{
        const students=await student.find();
        res.status(200).json(students);
    }
    catch(err){
        res.status(500).json({err:"failed to fetch student data"});

    }
}
module.exports=getAllStudents;

// exports.createStudent=async(req,res)=>{
//     const {name,Rollnumber,email,password}=req.body;
//     try{
//         const newStudent=new student({
//             name,
//             Rollnumber,
//             email,
//             password
//         });
//         await newStudent.save();
//         res.status(201).json({message:"Student created successfully"});
//     }
//     catch(err){
//         res.status(500).json({err:"failed to create student"});
//     }
// }