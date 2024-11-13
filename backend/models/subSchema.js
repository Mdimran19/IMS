import mongoose from "mongoose";
import validator from "validator";


const subSchema = new mongoose.Schema({
    department:{
        type:String,
        required: true,
       // minLength: [3,"First Name Must Contain At Least 3 Characters!" ]
    },
    years:{
        type:String,
        required: true,
      //  minLength: [3,"First Name Must Contain At Least 3 Characters!" ]
    },
    created:{
        type:String,
        required: true,
      // validate: [validator.isEmail, "please Provide A Valid Email!"]
    },
    fee:{
        type:String,
        required: true,
      //  minLength: [4,"Phone Number Must Contain" ],
      //  maxLength: [11,"Phone Number Must Contain"]
    },
  
   
  
},{
    timestamps:true,
})

export const Sub= mongoose.model("Sub",subSchema);