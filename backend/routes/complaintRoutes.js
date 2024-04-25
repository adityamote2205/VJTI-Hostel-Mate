import express from "express";
import {Router} from "express";
import upload from '../multerConfig.js';
import uploadMessImg from "../muterConfigMess.js";
const complaintRoutes=Router();
import { getStudentComplaint,deleteStudentComplaint,postStudentComplaint,getStudentMessComplaint,postStudentMessComplaint,deleteStudentMessComplaint} from "../controller/complaintController.js";

complaintRoutes.route("/complaint/hostel/student").get(getStudentComplaint);
complaintRoutes.route("/complaint/hostel/student/:id").delete(deleteStudentComplaint);
complaintRoutes.route("/complaint/hostel/student").post(upload.single('image'),postStudentComplaint);
complaintRoutes.route("/complaint/mess/student").get(getStudentMessComplaint);
complaintRoutes.route("/complaint/mess/student").post(uploadMessImg.single('image'),postStudentMessComplaint);
complaintRoutes.route("/complaint/mess/student/:id").delete(deleteStudentMessComplaint);
export default complaintRoutes;