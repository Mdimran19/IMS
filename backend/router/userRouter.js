import express from "express";
import { addCourse, addNewAdmin, addNewNotice, getCourses, getNoticeDetails, getUserDetails, login, studentRegister } from "../controller/user.js";


const router = express.Router();

router.post("/register", studentRegister);
router.post("/login", login);
router.post("/admin/addnew", addNewAdmin);
router.post("/add/notice", addNewNotice);
router.get("/me", getUserDetails);
router.post("/course", addCourse);
router.get("/sub", getCourses);
router.get("/notice", getNoticeDetails)

export default router;