import express from "express";
import { Router } from "express";
const loginRoutes = Router();

import { studentLogin , rectorLogin} from "../controller/loginController.js";

loginRoutes.route("/login/student").post(studentLogin);
loginRoutes.route("/login/rector").post(rectorLogin);
export default loginRoutes;