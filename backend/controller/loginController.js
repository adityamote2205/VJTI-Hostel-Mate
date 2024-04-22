import express from "express";
import cors from "cors";
import pool from "../db.js";
import bcrypt from "bcrypt";
import asyncWrapper from "express-async-handler";
import jwtGenerator from "../utills/jwttokengenerator.js"
const app=express();
app.use(express.json());
app.use(cors());
pool.connect();

export const studentLogin=asyncWrapper(async(req,res)=>{
    const { email,password}=req.body;
    try{
        const student=await pool.query("SELECT * FROM students WHERE email=$1",[email]);
        if(student.rows.length===0){
            return res.status(401).json("Invalid Email!");
        }
        const validPassword=await bcrypt.compare(password,student.rows[0].password);
        if(!validPassword){
            return res.status(401).json("Invalid Password!");
        }
        const jwtToken = jwtGenerator(student.rows[0].id, 'student');
        console.log({jwtToken});
        return res.json({ jwtToken });
    }
    catch(err){
        console.error('Error in signing student:', err.message);
       res.status(500).send("Server error");
    }
});
export const rectorLogin=asyncWrapper(async(req,res)=>{  
    const{email,password}=req.body;
    try{
       const rector=await pool.query("SELECT * FROM rectors WHERE email=$1",[email]);
       if( rector.rows.length===0){
        return res.status(403).json("Invalid Email!");
       }
       const validPassword=await bcrypt.compare(password,rector.rows[0].password);
       if(!validPassword){
        return res.status(403).json("Invalid Password!");
       }
       const jwtToken = jwtGenerator(rector.rows[0].id, 'rector');
        return res.json({ jwtToken });
    }
    catch(err){
        console.error('Error in signing rector:', err.message);
        res.status(500).send("Server error");
    }
}
);


