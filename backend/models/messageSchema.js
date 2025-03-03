import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: [3,"First Name Must Contain At Least 3 Characters!" ]
    },
    lastName:{
        type:String,
        required: true,
        minLength: [3,"First Name Must Contain At Least 3 Characters!" ]
    },
    email:{
        type:String,
        required: true,
       validate: [validator.isEmail, "please Provide A Valid Email!"]
    },
    phone:{
        type:String,
        required: true,
        minLength: [4,"Phone Number Must Contain" ],
        maxLength: [11,"Phone Number Must Contain"]
    },
    message:{
        type:String,
        required: true,
        minLength: [6,"Message Must Contain At Least 10 Characters!" ]
    },
},{
    timestamps:true,
})

export const Message = mongoose.model("Message",messageSchema);