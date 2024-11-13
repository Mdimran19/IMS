class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// export const errorMiddleware = (req, res, next) => {
//     err.message = err.message || "Internal server Error";
//     err.statusCode = err.statusCode || 500;

//     if (err.code === 11000) {
//         const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
//         err = new ErrorHandler(message, 400);
//     }
//     if (err.name == "JsonWebTokenError") {
//         const message = " Json Web Token invalid, Try again!";
//         err = new ErrorHandler(message, 400);
//     }
//     if (err.name == "TokenExpiredError") {
//         const message = " Json Web Token Expired, Try again!";
//         err = new ErrorHandler(message, 400);
//     }
//     if (err.name == "CastError") {
//         const message = `Invalid ${err.path}`
//         err = new ErrorHandler(message, 400);
//     }

//     const errorMessage = err.errors
//      ? Object.values(err.errors)
//      .map(error => error.message)
//      .join(" ")
//       : err.message;

//     return res.status(err.statusCode).json({
//         success: false,
//         message: errorMessage,
//     });
// }

export const errorMiddleware = (err, req, res, next) => {
    // ডিফল্ট ত্রুটি বার্তা এবং স্ট্যাটাস কোড সেট করা
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    // বিশেষ ত্রুটি কোডের জন্য কাস্টম ত্রুটি বার্তা
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
        const message = "Json Web Token invalid, Try again!";
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "TokenExpiredError") {
        const message = "Json Web Token Expired, Try again!";
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // ত্রুটি বার্তা তৈরি করা
    const errorMessage = err.errors
        ? Object.values(err.errors)
            .map(error => error.message)
            .join(" ")
        : err.message;

    // ত্রুটি রেসপন্স পাঠানো
    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage,
    });
}

export default ErrorHandler;