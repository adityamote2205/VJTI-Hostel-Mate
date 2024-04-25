import express from "express";
import {Router} from "express";
const studentProfileRoutes=Router();
import {getStudentProfile,getStudentProfileEdit,updateStudentProfile} from "../controller/studentProfileController.js";


studentProfileRoutes.route("/profile/student").get(getStudentProfile);
studentProfileRoutes.route("/profile/student/edit").get(getStudentProfileEdit);
studentProfileRoutes.route("/profile/student/edit").put(updateStudentProfile);
export default studentProfileRoutes;