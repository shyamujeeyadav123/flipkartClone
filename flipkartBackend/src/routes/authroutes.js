import express from "express"
import {register , login }  from "../controllers/authcontrollers.js"

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
console.log("Auth routes loaded");

export default router;