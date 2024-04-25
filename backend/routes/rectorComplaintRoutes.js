import express from "express";
import {Router} from "express";
const rectorComplaintRoutes=Router();
import { getRectorComplaints,putRectorComplaint,getRectorMessComplaints ,putRectorMessComplaint} from "../controller/rectorComplaintController.js";
rectorComplaintRoutes.route("/complaint/hostel/rector").get(getRectorComplaints);
rectorComplaintRoutes.route("/complaint/hostel/rector/:id").put(putRectorComplaint);
rectorComplaintRoutes.route("/complaint/mess/rector").get(getRectorMessComplaints);
rectorComplaintRoutes.route("/complaint/mess/rector/:id").put(putRectorMessComplaint);
export default rectorComplaintRoutes;
