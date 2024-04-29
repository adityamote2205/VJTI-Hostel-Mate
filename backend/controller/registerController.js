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

export const studentRegister = asyncWrapper(async (req, res) => {
    const { name, gender, year, block, branch, room_no, reg_no, email, password } = req.body;
    console.log(req.body);

    try {
        const student = await pool.query("SELECT * FROM students WHERE email=$1",[email]);
        if(student.rows.length > 0){
            return res.status(401).json("Student already exist!");
        }
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(req.body.password, salt);
        
        const newStudent= await pool.query("INSERT INTO students(name,gender,year,block,branch,room_no,reg_no,email,password) values($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",[name, gender, year, block, branch, room_no, reg_no, email,bcryptPassword]);
        const jwtToken = jwtGenerator(newStudent.rows[0].id, 'student');
        console.log(jwtToken);
         res.status(200).json({ jwtToken });
    } catch (err) {
       console.error('Error registering students:', err.message);
       res.status(500).send("Server error");
    }
});
 export const rectorRegister = asyncWrapper(async (req, res) => {
    const { name, gender, block,  email, password } = req.body;

    try {
        const rector = await pool.query("SELECT * FROM rectors WHERE email=$1",[email]);
        if(rector.rows.length > 0){
            return res.status(401).json("User already exist!");
        }
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(req.body.password, salt);
        
        const newRector= await pool.query("INSERT INTO rectors(name,gender,block,email,password) values($1,$2,$3,$4,$5) RETURNING *",[name, gender, block, email,bcryptPassword]);
        const jwtToken = jwtGenerator(newRector.rows[0].id, 'rector');
        console.log("success");
        res.status(200).json({ jwtToken });
    } catch (err) {
       console.error('Error registering rector:', err.message);
       res.status(500).send("Server error");
    }
});