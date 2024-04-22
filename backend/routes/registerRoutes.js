import express from "express";
import { Router } from "express";
const registerRoutes = Router();

import { studentRegister , rectorRegister} from "../controller/registerController.js";

registerRoutes.route("/register/student").post(studentRegister);
registerRoutes.route("/register/rector").post(rectorRegister);
export default registerRoutes;