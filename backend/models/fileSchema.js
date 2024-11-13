import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({
    title: {
        type: String
    },
    titleAvatar:{
        public_id: String,
        url: String
    }
})
export const File = mongoose.model("File", fileSchema)