import mongoose from "mongoose";
export const connectDB = async ()=>{
    try {
        await mongoose.connect(
            process.env.MONGO_URI,
           // {useNewUrlParser: true}
            )
            console.log('mongoose connection open')
    } catch (error) {
        console.log(error.message)
    }
}
