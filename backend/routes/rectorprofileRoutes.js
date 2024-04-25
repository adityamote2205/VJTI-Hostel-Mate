import express from "express";
import {Router} from "express";
import {getRectorProfile,getRectorProfileEdit,updateRectorProfile} from "../controller/rectorProfileController.js"

const rectorProfileRoutes=Router();

rectorProfileRoutes.route("/profile/rector").get(getRectorProfile);
rectorProfileRoutes.route("/profile/rector/edit").get(getRectorProfileEdit);
rectorProfileRoutes.route("/profile/rector/edit").put(updateRectorProfile);

 export default rectorProfileRoutes;