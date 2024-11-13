import { catchAsyncErrors } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { Admission } from "../models/admissionSchema.js";

export const admissionRegister = catchAsyncErrors(async(req, res, next)=>{
   const { fullName,
    fatherName,
    motherName,
    sscRoll,
    sscReg,
    sscResult,
    sscSession,
    hscRoll,
    department,
    hscReg,
    hscResult,
   hscSession } = req.body;

if( 
    !fullName ||
    !fatherName ||
    !motherName ||
    !sscRoll ||
    !sscReg ||
    !sscResult ||
    !sscSession ||
    !hscRoll ||
    !hscReg ||
    !department ||
    !hscResult ||
   !hscSession
){
    return next(new ErrorHandler("please Fill Full From!", 400));
}
let admission = await Admission.findOne({ hscRoll });
if (admission) {
    return next(new ErrorHandler("admission already registered!", 400))
}
admission = await Admission.create({
    fullName,
    fatherName,
    motherName,
    sscRoll,
    sscReg,
    sscResult,
    sscSession,
    hscRoll,
    hscReg,
    hscResult,
    department,
   hscSession
});
res.status(200).json({
    success: true,
    message: "success"
})
});


export const getAllAdmission = catchAsyncErrors(async(req, res ,next)=>{
    const admission = await Admission.find({})
    res.status(200).json({
        success: true,
        admission,
    })
})