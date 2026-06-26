import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import mongoose from "mongoose"
import connectDB from "../config/db.js"
import User from "../models/usermodel.js"

// load enviroment 
// connect db
// check already admin exists or not 
// hashh passoword
// cereate admin 
// mongoose connection close krna 

dotenv.config();

const Admin = async () => {
    try {
        await connectDB();

        const adminExits = await  User.findOne({ email: "admin@gmail.com" });

        if (adminExits) {
            console.log("admin already exists")
            process.exit(0);
        }
        // hash password
        const hashedPassword = await bcrypt.hash("admin@123", 10)

        await User.create({
            name: "admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin"
        })
        console.log("admin created successfully ")
        process.exit(0)//means program successfull run ho gya to process ko band krne k liye
    }
    catch (error) {
        console.error("❌ Error while creating admin:", error.message);
        process.exit(1);//means program fail ho gya to process ko band krne k liye 
    }
    finally {
        await mongoose.connection.close();//use for close mongoose connectionn
    }
}

Admin();