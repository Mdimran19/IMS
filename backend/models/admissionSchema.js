import mongoose from "mongoose";
import validator from "validator";
const admissionSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    fatherName: {
        type: String,
    },
    motherName: {

    },
    sscRoll:{
        type: String,
    },
    sscReg: {
        type: String,
    },
    sscResult: {
        type: String,
    },
    sscSession:{
        type: String,
    },
    hscRoll: {
        type: String,
    },
    hscReg:{
        type: String,
    },
    department: {
        type: String,
    },
    hscResult: {
        type: String,
    },
   hscSession: {
    type: String,
   },
   status:{
    type: String,
    required: true,
    enum: ["Pending", "Accepted","Rejected"],
    default: "Pending"
},
})
export const Admission = mongoose.model("Admission", admissionSchema)