import express from "express";
import cors from "cors";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncWrapper from "express-async-handler";
import jwtGenerator from "../utills/jwttokengenerator.js";
import dotenv from "dotenv";

export const checkToken=asyncWrapper(async(req,res)=>{
    const token=req.headers.authorization;
    try{
        const decodedToken=jwt.verify(token,process.env.JWTSECRET);
        res.status(200).json({data:true});
    }
    catch(err){
        res.status(200).json({data:false});
    }
});
export default checkToken;