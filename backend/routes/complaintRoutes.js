import express from "express";
import {Router} from "express";
import upload from '../multerConfig.js';
const complaintRoutes=Router();
import { getStudentComplaint,deleteStudentComplaint,postStudentComplaint } from "../controller/complaintController.js";

complaintRoutes.route("/complaint/hostel/student").get(getStudentComplaint);
complaintRoutes.route("/complaint/hostel/student/:id").delete(deleteStudentComplaint);
complaintRoutes.route("/complaint/hostel/student").post(upload.single('image'),postStudentComplaint);
export default complaintRoutes;