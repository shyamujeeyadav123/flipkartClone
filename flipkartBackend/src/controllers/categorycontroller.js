import Category from "../models/categorymodel.js";
// check tile and desc are not empty
// check categroy is exists or not if yes then error and no then 
// save in db and success response bhejo
export const createCategory = async(req,res) => {
    try{
        console.log("controller hit")
        const {title,description} = req.body;

        if(!title || !description){
            return res.status(400).json({message :"title and description is reqyired"})
        }

        const categoryExists = await Category.findOne({title})
        if(categoryExists){
            return res.status(400).json({message : "categroy (title) is already exists in db "})
        }

        const category = await Category.create({
            title,
            description
        })
        return res.status(201).json({
            message :"category created successfully ",
            category
        })
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
export const getAllCategory = async(req,res) => {
    try{
        const getAllCategories = await Category.find();
        console.log("getallcategory tak code run ho gya hai ")
        console.log(getAllCategories);
        res.status(200).json({getAllCategories})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}