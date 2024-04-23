import express from "express";
import cors from "cors";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncWrapper from "express-async-handler";
import jwtGenerator from "../utills/jwttokengenerator.js";
import dotenv from "dotenv";
const app=express();
app.use(express.json());
app.use(cors());
pool.connect();
dotenv.config();
export const getStudentComplaint = asyncWrapper(async (req, res) => {
    const token = req.headers.authorization;

    try {
        const decodedToken = jwt.verify(token, process.env.JWTSECRET);
        const { user_id, user_role } = decodedToken;

        if (user_role == "student") {
            const allComplaints = await pool.query("SELECT * FROM hostel_complaints WHERE student_id=$1 ORDER BY created_on DESC", [user_id]);
            return res.json(allComplaints.rows);
        } else {
            res.status(403).json({ error: "Unauthorized" });
        }
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
            res.status(401).json({ error: "Invalid or expired token" });
        } else {
            console.error(err.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
export const deleteStudentComplaint=asyncWrapper(async(req,res)=>{
       const token= req.headers.authorization;
       try {
        const decodedToken = jwt.verify(token, process.env.JWTSECRET);
        const { user_id, user_role } = decodedToken;
        const complaint_id=req.params.id;
        if(user_role=="student"){
          const result=await pool.query("DELETE FROM hostel_complaints WHERE complaint_id=$1 AND student_id=$2",[complaint_id,user_id]);
          console.log(result);
          if(result.rowCount==0){
            return res.json({status:"You are not authorised to delete this complaint"});
          }
          return res.json({status:"Success"});
        }
        else{
            return res.status(403).json({ error: "Unauthorized" });
        }
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
           return  res.status(401).json({ error: "Invalid or expired token" });
        } else {
            console.error(err.message);
           return  res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
export const postStudentComplaint=asyncWrapper(async(req,res)=>{
    const token= req.headers.authorization;
    try {
     const decodedToken = jwt.verify(token, process.env.JWTSECRET);
     const { user_id, user_role } = decodedToken;
     if(user_role=="student"){
        const {topic,room_details,complaint_type,complaint,created_on}=req.body;
        let image=null;
        if(req.file){
            image=req.file.path;
        }
        const result=await pool.query("INSERT INTO hostel_complaints(topic,room_details,complaint_type,image,complaint,student_id,created_on) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",[topic,room_details,complaint_type,image,complaint,user_id,created_on]);
        console.log(result.rows);
    }
     else{
        return res.status(403).json({ error: "Unauthorized" });
    }
 } catch (err) {
     if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
        return  res.status(401).json({ error: "Invalid or expired token" });
     } else {
         console.error(err.message);
        return  res.status(500).json({ error: "Internal Server Error" });
     }
 }
});
