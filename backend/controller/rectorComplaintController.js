import express from "express";
import cors from "cors";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncWrapper from "express-async-handler";
import jwtGenerator from "../utills/jwttokengenerator.js";
import dotenv from "dotenv";
import fs from "fs";

export const getRectorComplaints=asyncWrapper(async(req,res)=>{
         const token=req.headers.authorization;
         try{
            const decodedToken=jwt.verify(token,process.env.JWTSECRET);
            const {user_id ,user_role}=decodedToken;
            if(user_role=='rector'){
                  const block= await pool.query('SELECT block FROM rectors WHERE id=$1',[user_id]);
                  const data=block.rows[0].block;
                  const result=await pool.query("SELECT complaint_id,topic,complaint_type,image,complaint,student_id,created_on,is_completed,completed_on,block,room_no,name FROM hostel_complaints INNER JOIN students ON hostel_complaints.student_id=students.id WHERE students.block=$1 ORDER BY CASE WHEN is_completed = 'no' THEN 0 ELSE 1 END ",[data]);
                  const complaintsWithImages = await Promise.all(result.rows.map(async (complaint) => {
                    if (complaint.image) {
                        const imagePath = complaint.image;
                        try {
                            const imageBase64 = await fs.promises.readFile(imagePath, { encoding: "base64" });

                            return {
                                ...complaint,
                                imageBase64: imageBase64
                            };
                        } catch (error) {
                            console.error(`Error reading image file ${imagePath}: ${error.message}`);
                            return complaint;
                        }
                    } else {
                        return complaint;
                    }
                }));
                res.status(200).json(complaintsWithImages);
            }
            else{
                res.status(403).json({ error: "Unauthorized" });
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
export const putRectorComplaint=asyncWrapper(async(req,res)=>{
     const token=req.headers.authorization;
     try{
         const decodedToken=jwt.verify(token,process.env.JWTSECRET);
         const{user_id,user_role}=decodedToken;
         const complaint_id=req.params.id;
         if(user_role=="rector"){
              const response=await pool.query('SELECT is_completed FROM hostel_complaints WHERE complaint_id=$1',[complaint_id]);
             if(response.rows[0].is_completed=='no'){
               const timestamp = new Date();
               const formattedTimestamp = timestamp.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true // Use 12-hour clock
              });
              await pool.query('UPDATE hostel_complaints SET is_completed=$1,completed_on=$2 WHERE complaint_id=$3',['yes',formattedTimestamp,complaint_id]);
              res.status(200).json("Updated Succesfully!!")
            }
             else{
                res.status(200).json("already completed!!");
             }
         }
         else{
            res.status(403),json({ error: "Unauthorized" });
         }
     }catch(err){
        if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
            res.status(401).json({ error: "Invalid or expired token" });
        } else {
            console.error(err.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
     }
});
export const getRectorMessComplaints=asyncWrapper(async(req,res)=>{
    const token=req.headers.authorization;
    try{
       const decodedToken=jwt.verify(token,process.env.JWTSECRET);
       const {user_id ,user_role}=decodedToken;
       if(user_role=='rector'){
             const result=await pool.query("SELECT * FROM mess_complaints ORDER BY CASE WHEN is_completed = 'no' THEN 0 ELSE 1 END ");
             const complaintsWithImages = await Promise.all(result.rows.map(async (complaint) => {
               if (complaint.image) {
                   const imagePath = complaint.image;
                   try {
                       const imageBase64 = await fs.promises.readFile(imagePath, { encoding: "base64" });

                       return {
                           ...complaint,
                           imageBase64: imageBase64
                       };
                   } catch (error) {
                       console.error(`Error reading image file ${imagePath}: ${error.message}`);
                       return complaint;
                   }
               } else {
                   return complaint;
               }
           }));
           res.status(200).json(complaintsWithImages);
       }
       else{
           res.status(403).json({ error: "Unauthorized" });
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
export const putRectorMessComplaint=asyncWrapper(async(req,res)=>{
const token=req.headers.authorization;
try{
    const decodedToken=jwt.verify(token,process.env.JWTSECRET);
    const{user_id,user_role}=decodedToken;
    const complaint_id=req.params.id;
    if(user_role=="rector"){
         const response=await pool.query('SELECT is_completed FROM mess_complaints WHERE complaint_id=$1',[complaint_id]);
        if(response.rows[0].is_completed=='no'){
          const timestamp = new Date();
          const formattedTimestamp = timestamp.toLocaleString('en-US', {
           year: 'numeric',
           month: '2-digit',
           day: '2-digit',
           hour: '2-digit',
           minute: '2-digit',
           second: '2-digit',
           hour12: true // Use 12-hour clock
         });
         await pool.query('UPDATE mess_complaints SET is_completed=$1,completed_on=$2 WHERE complaint_id=$3',['yes',formattedTimestamp,complaint_id]);
         res.status(200).json("Updated Succesfully!!")
       }
        else{
           res.status(200).json("already completed!!");
        }
    }
    else{
       res.status(403),json({ error: "Unauthorized" });
    }
}catch(err){
   if (err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError) {
       res.status(401).json({ error: "Invalid or expired token" });
   } else {
       console.error(err.message);
       res.status(500).json({ error: "Internal Server Error" });
   }
}
});