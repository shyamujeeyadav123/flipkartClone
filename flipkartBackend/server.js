import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authroutes from "./src/routes/authroutes.js"
import categoryroutes from "./src/routes/categoryroutes.js"
import cors from "cors";

dotenv.config();// ye dotenv file find krta hai aur usko convert krta hia process.env me like process.env.port taki kahi se v access kr sku
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();


app.use("/api/auth",authroutes)
app.use("/api/category", categoryroutes)

// db connect

app.get("/", (req,res) => {
    res.send("server is running successfull ")
})

app.listen(3000,() => {
    console.log("server is running successfull on http://localhost:3000")
});