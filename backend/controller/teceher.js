import cloudinary from "cloudinary";
import { catchAsyncErrors } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { Teceher } from "../models/teceherSchema.js";

export const addNewTeceher = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Notice Avatar Required", 400))
    }
    // const {fileAvatar} = req.files;
    const fileAvatar = req.files.fileAvatar;

    // Check if fileAvatar is undefined
    if (!fileAvatar) {
        return next(new ErrorHandler("No file found with the name 'fileAvatar'", 400));
    }
    const allowFormats = ["image/png", "image/jpeg", "image/webp"]
    if (!allowFormats.includes(fileAvatar.mimetype)) {
        return next(new ErrorHandler("Files Format not Supported!", 400));

    }


    const {
        firstName,
        lastName,
        email,
        phone,

        nid,
        department,
        gender
    } = req.body;
    if (!firstName ||
        !lastName||
        !email ||
        !phone ||
       
        !nid ||
        !department ||
        !gender) {
        return next(new ErrorHandler("Please Provide Full Deatils!", 400));
    }


    const cloudinaryResponse = await cloudinary.uploader.upload(
        fileAvatar.tempFilePath
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary Error")
    }
    const notice = await Teceher.create({
        firstName,
        lastName,
        email,
        phone,
       // dob,
        nid,
        department,
        gender,
         role: "Teceher",
         fileAvatar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        },
    });
    res.status(200).json({
        success: true,
        message: "New Teceher Registered!",
        notice
    });
});

export const getTeacherDetails = catchAsyncErrors(async(req,res,next)=>{
    // const user = req.user;
     const notice = await Teceher.find();
     res.status(200).json({
         success: true,
         notice,
     });
 });