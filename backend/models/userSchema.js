import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
       // minLength: [3,"First Name Must Contain At Least 3 Characters!" ]
    },
    lastName:{
        type:String,
        required: true,
      //  minLength: [3,"First Name Must Contain At Least 3 Characters!" ]
    },
    email:{
        type:String,
        required: true,
      // validate: [validator.isEmail, "please Provide A Valid Email!"]
    },
    phone:{
        type:String,
        required: true,
      //  minLength: [4,"Phone Number Must Contain" ],
      //  maxLength: [11,"Phone Number Must Contain"]
    },
    studentId:{
        type:String,
       // required: true,
    },
    session:{
        type:String,
      //  required: true,
    },
    department:{
        type:String,
       // required: true,
    },
    password: {
        type: String,
        required: true,
       // minLength: [4," Must Contain" ],
       // maxLength: [12," Must Contain"]
    },

    role: {
        type: String,
        required: true,
        enum: ["Student", "Admin", "Teceher"]
    }
},{
    timestamps:true,
})




userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) {
     next();
    }
    this.password = await bcrypt.hash(this.password, 10);
 });
 
 userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password); 
 };
 
 userSchema.methods.generateJsonWebToken = function(){
 return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{expiresIn: process.env.JWT_EXPIRES, })
     
 }

 

export const User = mongoose.model("User",userSchema);