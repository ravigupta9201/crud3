import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:10, max:50},
    fees:{type:mongoose.Decimal128, required:true, validate:(value)=>value >= 1000.5 }
})

//compiling schema or creating model
const studentModel = mongoose.model('student', studentSchema)

export default studentModel