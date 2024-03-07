import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connect.db.js";
import cors from "cors";
import cloudinary from "cloudinary";
import * as routes from "./routes/app.route.js";


dotenv.config();

connectDB()
.then(()=>{
    const port = process.env.PORT||8000;
    const app = express();
    app.use(cors());
    app.use(express.json({limit: "16kb"}));
    app.use(express.urlencoded({extended: true , limit : "16kb"}));
       
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET
    });

    const router = express.Router();
    routes(router);
    app.use("/api", router)

    app.listen(port , ()=>{
        console.log(`app is listening on port ${port}`);
    })
})
.catch((error)=>{
    console.log("Error connecting DB" , error);
})


