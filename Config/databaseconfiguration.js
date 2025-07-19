
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb connected successfully")
    }
    catch(err){
        console.log("MongoDb connection failed",err);
    }
}

module.exports=connectDB;