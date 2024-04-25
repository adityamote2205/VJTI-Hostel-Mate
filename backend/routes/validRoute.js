import express from "express";
import {Router} from "express";
const validRoute=Router();
import {checkToken} from "../controller/validTokenController.js";


validRoute.route("/validToken").post(checkToken);

export default validRoute;