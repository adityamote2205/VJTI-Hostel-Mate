import express from "express";
import cors from "cors";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncWrapper from "express-async-handler";
import jwtGenerator from "../utills/jwttokengenerator.js";
import dotenv from "dotenv";


export const getStudentProfile=asyncWrapper(async(req,res)=>{
    const token=req.headers.authorization;
    try{
       const decodedToken=jwt.verify(token,process.env.JWTSECRET);
       const {user_id,user_role}=decodedToken;
       if(user_role=='student'){
          const result=await pool.query('SELECT id,name,gender,year,block,branch,room_no,reg_no,email FROM students WHERE id=$1',[user_id]);
          const studentData=result.rows[0];
          const result2=await pool.query("SELECT COUNT(*) AS total_count, COUNT(CASE WHEN is_completed = 'yes' THEN 1 END) AS completed_count,COUNT(CASE WHEN is_completed = 'no' THEN 1 END) AS pending_count FROM hostel_complaints WHERE  student_id = $1",[user_id])
          const hostelData=result2.rows[0];
          const result3=await pool.query("SELECT COUNT(*) AS total_count, COUNT(CASE WHEN is_completed = 'yes' THEN 1 END) AS completed_count,COUNT(CASE WHEN is_completed = 'no' THEN 1 END) AS pending_count FROM mess_complaints WHERE  student_id = $1",[user_id]);
          const messData=result3.rows[0];
          res.status(200).json({
            status:"success",
            profileData:studentData,
            hostelData:hostelData,
            messData:messData
          })
        }
       else{
         res.status(403).json({ error: "Unauthorized" })
       }
    }
    catch(err){
        if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
            res.status(401).json({ error: "Invalid or expired token" });
        } else {
            console.error(err.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
 
export const getStudentProfileEdit=asyncWrapper(async(req,res)=>{
     const token=req.headers.authorization;
     try{
       const decodedToken=jwt.verify(token,process.env.JWTSECRET);
       const {user_id,user_role}=decodedToken;
       if(user_role=='student'){
        const result=await pool.query('SELECT id,name,gender,year,block,branch,room_no,reg_no,email FROM students WHERE id=$1',[user_id]);
        const studentData=result.rows[0];
        res.status(200).json({
          status:"success",
          profileData:studentData
        })
       }
       else{
        res.status(403).json({error:"Unauthorized"});
       }
     }
     catch(err){
      if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
        res.status(401).json({ error: "Invalid or expired token" });
    } else {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
     }
});

export const updateStudentProfile=asyncWrapper(async(req,res)=>{
    const token=req.headers.authorization;
    const {name,gender,year,block,branch,room_no,reg_no,email} =req.body;
    try{
       const decodedToken=jwt.verify(token,process.env.JWTSECRET);
       const {user_id,user_role}=decodedToken;
       if(user_role=="student"){
          await pool.query("UPDATE students SET name=$1,gender=$2,year=$3,block=$4,branch=$5,room_no=$6,reg_no=$7,email=$8 WHERE id=$9",[name,gender,year,block,branch,room_no,reg_no,email,user_id]);
          res.status(200).json("updated Succesfully!!");
       }
       else{
        res.status(403).json({error:"Unauthorized"});
       }
    }
    catch(err){
      if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
        res.status(401).json({ error: "Invalid or expired token" });
    } else {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    }
});