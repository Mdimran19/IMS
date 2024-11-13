import { catchAsyncErrors } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";
export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    try {
       
        const { firstName, lastName, email, phone, message } = req.body;
        if (!firstName || !lastName || !email || !phone || !message) {
          
            return next(new ErrorHandler("please Fill Full From!", 400));
        } else {
            await Message.create({ firstName, lastName, email, phone, message });
            res.status(200).json({
                succes: true,
                message: "message send successfully!",
            });
        }
    } catch (error) {
        console.log(error);
         res.status(400).json({
           success: false,
           message: " ",
       });
    }

})

export const getAllMessages = catchAsyncErrors(async(req,res,next)=>{
    const message = await Message.find({});
    res.status(200).json({
        success: true,
        message,
    })
})