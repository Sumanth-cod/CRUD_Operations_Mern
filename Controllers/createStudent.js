const student =require('../models/Studentmodel');

const createStudent=async(req,res)=>{
    try{ 
        const {name,Rollnumber,email,password}=req.body;
        const  newStudent=new student({
            name,
            Rollnumber,
            email,
            password

        })
        await newStudent.save();
        res.status(201).json({message:"Student Created Successfully "})
    }

    catch(err){
        res.status(500).json({err:"failed to create the user"});

    }}

    module.exports=createStudent;