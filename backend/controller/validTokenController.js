import express from "express";
import cors from "cors";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncWrapper from "express-async-handler";
import jwtGenerator from "../utills/jwttokengenerator.js";
import dotenv from "dotenv";

export const checkToken = asyncWrapper(async (req, res) => {
    const token = req.body.token;
  
    try {
        if (!token) {
            return res.status(401).json({ error: "Missing token" });
          }
      
  
      const decodedToken = jwt.verify(token, process.env.JWTSECRET);
  
      // Optionally, you can include the decoded token data in the response
      res.status(200).json({ data: true, decodedToken });
    } catch (err) {
      // Handle specific error cases, such as expired or invalid tokens
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Token expired" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        // Handle other errors
        console.error("Token verification failed:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

