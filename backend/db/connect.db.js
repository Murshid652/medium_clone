import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URI}${DB_NAME}`);
    } catch (error) {
        console.log("ERROR connecting Database" , error);
        process.exit(1);
    }
}

export default connectDB;