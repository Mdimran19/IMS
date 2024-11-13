import express from "express";
import { addNewTeceher, getTeacherDetails } from "../controller/teceher.js";


const router = express.Router();




router.post("/te", addNewTeceher)
router.get('/te', getTeacherDetails)

export default router;