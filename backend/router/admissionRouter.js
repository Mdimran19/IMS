import express from "express";
import { admissionRegister, getAllAdmission } from "../controller/admission.js";



const router = express.Router();


router.post("/admit",admissionRegister)
router.get("/admit",getAllAdmission)



export default router;