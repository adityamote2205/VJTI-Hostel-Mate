import express from "express";
import cors from "cors";
import pool from "./db.js";
import dotenv from 'dotenv';
import registerRoutes from "./routes/registerRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
dotenv.config();
const app=express();

app.use(express.json());
app.use(cors());
pool.connect();
 

console.log("hi");

app.use('/',registerRoutes);
app.use('/',loginRoutes);
app.use('/',complaintRoutes);


app.listen(process.env.PORT,()=>{
     console.log(`server is runnning on port ${process.env.PORT}` );
})