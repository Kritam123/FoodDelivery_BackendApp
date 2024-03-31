import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import morgan from "morgan"
import { dbConnect } from "../config/dbConnect";
import { userRouter } from "./routes/userRoutes";
// config 
dotenv.config();
const app = express();
// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());


// userRoutes
app.use("/api/v1/user",userRouter);

app.get("/",(req,res)=>{
    res.status(200).json({message:"Server working!"})
});
// dbConnect
dbConnect();

app.listen(process.env.PORT,()=>{
    console.log('Server is working!');
})