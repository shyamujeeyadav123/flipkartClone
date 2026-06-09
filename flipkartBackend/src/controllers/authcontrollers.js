// import User from "../models/usermodel";
import User from "../models/usermodel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
// user check krna 
// password hashing krna 
// user ko db me store krana
//user ko response bhejna 
export const register = async (req, res) => {
    try {
        console.log("Headers:", req.headers);
        console.log("Body:", req.body);
        const { name, email, password, role } = req.body;
        //check user 
        const userExits = await User.findOne({ email });
        if (userExits) {
            return res.status(400).json({ message: "babuaa user already exists krt ba" })
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // user ko save krao 
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        })
        //response send
        res.status(201).json({ message: "user register successfully ", user })
    }
    catch
    (error) {
        console.log(error)
        res.status(500).json({ message: error.messsage })
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isUser = await User.findOne({ email });
        if (!isUser) {
            return res.status(400).json({ message: "user not found beta" });
        }

        const isMatch = await bcrypt.compare(password, isUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "invalid credentials" });
        }

        const token = jwt.sign(
            { id: isUser._id, role: isUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "login successful",
            token
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};