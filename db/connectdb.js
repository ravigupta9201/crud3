import mongoose from "mongoose"
mongoose.set('strictQuery', false);
const connectDB = async (DATABASE_URL)=>{
    try {
        const DB_OPTIONS = {
            dbname:'National-Infotech'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log('connected successfully...')
    } catch (err) {
        console.log(err)
    }
}

export default connectDB