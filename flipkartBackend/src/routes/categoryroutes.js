import express from "express";
import { createCategory , getAllCategory} from "../controllers/categorycontroller.js"
import Category from "../models/categorymodel.js";

const router = express.Router();

router.post("/createcategory",createCategory)
router.get("/getcategory" , getAllCategory)
export default router;