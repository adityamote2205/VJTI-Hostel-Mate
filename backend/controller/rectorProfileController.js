import express from "express";
import cors from "cors";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncWrapper from "express-async-handler";
import jwtGenerator from "../utills/jwttokengenerator.js";
import dotenv from "dotenv";


export const getRectorProfile=asyncWrapper(async(req,res)=>{
    const token=req.headers.authorization;
    try{
       const decodedToken=jwt.verify(token,process.env.JWTSECRET);
       const {user_id,user_role}=decodedToken;
       if(user_role=='rector'){
          const result=await pool.query('SELECT id,name,block,gender,email FROM rectors WHERE id=$1',[user_id]);
          const rectorData=result.rows[0];
          const result2=await pool.query("SELECT COUNT(*) AS total_count, COUNT(CASE WHEN is_completed = 'yes' THEN 1 END) AS completed_count,COUNT(CASE WHEN is_completed = 'no' THEN 1 END) AS pending_count FROM hostel_complaints INNER JOIN students ON hostel_complaints.student_id=students.id WHERE students.block=$1",[rectorData.block])
          const hostelData=result2.rows[0];
          const result3=await pool.query("SELECT COUNT(*) AS total_count, COUNT(CASE WHEN is_completed = 'yes' THEN 1 END) AS completed_count,COUNT(CASE WHEN is_completed = 'no' THEN 1 END) AS pending_count FROM mess_complaints ");
          const messData=result3.rows[0];
          res.status(200).json({
            status:"success",
            profileData:rectorData,
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
 
export const getRectorProfileEdit=asyncWrapper(async(req,res)=>{
     const token=req.headers.authorization;
     try{
       const decodedToken=jwt.verify(token,process.env.JWTSECRET);
       const {user_id,user_role}=decodedToken;
       if(user_role=='rector'){
        const result=await pool.query('SELECT id,name,block,email FROM rectors WHERE id=$1',[user_id]);
        const rectorData=result.rows[0];
        res.status(200).json({
          status:"success",
          profileData:rectorData
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

export const updateRectorProfile=asyncWrapper(async(req,res)=>{
    const token=req.headers.authorization;
    const {name,block,email} =req.body;
    try{
       const decodedToken=jwt.verify(token,process.env.JWTSECRET);
       const {user_id,user_role}=decodedToken;
       if(user_role=="rector"){
          await pool.query("UPDATE rectors SET name=$1,block=$2,email=$3 WHERE id=$4",[name,block,email,user_id]);
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