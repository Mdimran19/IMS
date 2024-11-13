import { catchAsyncErrors } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import {  Sub } from "../models/subSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import { File } from "../models/fileSchema.js";
import cloudinary from "cloudinary";
export const studentRegister = catchAsyncErrors(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        studentId,
        session,
        department,
        password,
        role
    } = req.body;
    if (!firstName ||
        !lastName ||
        !email ||
        !phone ||
        !studentId ||
        !session ||
        !department ||
        !password ||
        !role) {
        return next(new ErrorHandler("please Fill Full From!", 400));
    }
    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("user already registered!", 400))
    }
    user = await User.create({ firstName, lastName, email, phone, studentId, session, department,password, role });
    //  res.status(200).json({
    //     success: true,
    //     message: "succesfully done"
    //  })
    generateToken(user, "user Registered", 200, res);
})

export const login = catchAsyncErrors(async(req,res,next)=>{
    const {email,password,role} = req.body;
    if(!email || !password || !role){
        return next(new ErrorHandler("please Provide All Deatils!", 400));
    }
    if(!password){
        return next(new ErrorHandler("please provide original password!", 400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Password or Email!", 400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password or Email!", 400));
    }
    if(role !== user.role){
        return next(new ErrorHandler("User with this Role not found!", 400));
    }
    generateToken(user,"user Login in successfully!", 200, res);
})


export const addNewAdmin = catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        role
     } = req.body;
    if (!firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !role ) {

            return next(new ErrorHandler("please Fill Full From!", 400));

    }
    const isRegistered = await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} with this email already exists!`)); 
    }
    const admin = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        role: "Admin"        
    });
   // generateToken(admin, "user Registered", 200, res);
    res.status(200).json({
        success: true,
        message: "New Admin Registered!",
    });
});

export const addCourse = catchAsyncErrors(async(req,res,next)=>{
    const {department, years, created,fee} = req.body;
    if(!department || ! years || !created || !fee){
        // res.status(403).json({
        //     success: "false",
        //     message: "Please provide correct data"
        // })
        
        return next(new ErrorHandler("please Fill Full From!", 400));
    }
    const course =  await Sub.create({
            department,years, created, fee
        });
        res.status(200).json({
            success: true,
            message: "New Course Registered!",
        });
    

});

export const getCourses = catchAsyncErrors(async (req, res, next) => {
    try {
       
        const courses = await Sub.find(); 

     
        res.status(200).json({
            success: true,
            courses,
        });
    } catch (error) {
        
        return next(new ErrorHandler("An error occurred while fetching courses.", 500));
    }
});

export const getUserDetails = catchAsyncErrors(async(req,res,next)=>{
   // const user = req.user;
    const user = await User.find();
    res.status(200).json({
        success: true,
        user,
    });
});


export const addNewNotice = catchAsyncErrors(async(req,res,next)=>{
    if(!req.files || Object.keys(req.files).length === 0){
        return next(new ErrorHandler("Notice Avatar Required", 400))
    }
   // const {fileAvatar} = req.files;
   const fileAvatar = req.files.fileAvatar;

   // Check if fileAvatar is undefined
   if (!fileAvatar) {
       return next(new ErrorHandler("No file found with the name 'fileAvatar'", 400));
   }
    const allowFormats = ["image/png", "image/jpeg", "image/webp"]
    if(!allowFormats.includes(fileAvatar.mimetype)){
        return next(new ErrorHandler("Files Format not Supported!", 400));

    }


const {
   title
} = req.body;
if(!title){
        return next(new ErrorHandler("Please Provide Full Deatils!", 400));
    }
   

const cloudinaryResponse = await cloudinary.uploader.upload(
    fileAvatar.tempFilePath
);
if(!cloudinaryResponse || cloudinaryResponse.error){
    console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary Error")
}
const notice = await File.create({
    title,
    titleAvatar: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
    },
});
res.status(200).json({
    success: true,
    message: "New notice Registered!",
    notice
});
});


export const getNoticeDetails = catchAsyncErrors(async(req,res,next)=>{
    // const user = req.user;
     const notice = await File.find();
     res.status(200).json({
         success: true,
         notice,
     });
 });