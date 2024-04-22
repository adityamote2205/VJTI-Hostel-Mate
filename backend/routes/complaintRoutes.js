import express from "express";
import {Router} from "express";
const complaintRoutes=Router();
import { getStudentComplaint,deleteStudentComplaint } from "../controller/complaintController.js";

complaintRoutes.route("/complaint/hostel/student").get(getStudentComplaint);
complaintRoutes.route("/complaint/hostel/student/:id").delete(deleteStudentComplaint);
export default complaintRoutes;