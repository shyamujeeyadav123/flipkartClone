import mongoose from "mongoose";

const connectDB = async  () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected successfully : ${conn.connection.host}`)
        console.log(`mongodb host : ${conn.connection.host}`)
        console.log(`mongodb  port : ${conn.connection.port}`)
        console.log(`mongodb  dbname : ${conn.connection.name}`)
    }
    catch(error){
        console.log(`mongodb connection failed : ${error.message}`)
        process.exit(1 )
    }
};
export default connectDB;