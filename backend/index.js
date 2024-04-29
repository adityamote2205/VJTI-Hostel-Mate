import express from "express";
import cors from "cors";
import pool from "./db.js";
import dotenv from 'dotenv';
import registerRoutes from "./routes/registerRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import rectorComplaintRoutes from "./routes/rectorComplaintRoutes.js";
import studentProfileRoutes from "./routes/studentProfileRoutes.js";
import rectorProfileRoutes from "./routes/rectorprofileRoutes.js";
import validRoute from "./routes/validRoute.js";

dotenv.config();
const app=express();

app.use(express.json());
app.use(cors());
pool.connect();
 
app.use('/',registerRoutes);
app.use('/',loginRoutes);
app.use('/',complaintRoutes);
app.use('/',rectorComplaintRoutes);
app.use('/',studentProfileRoutes);
app.use('/',rectorProfileRoutes);
app.use('/',validRoute);

app.listen(process.env.PORT,()=>{
     console.log(`server is runnning on port ${process.env.PORT}` );
})