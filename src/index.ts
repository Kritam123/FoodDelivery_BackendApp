import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cloudinary from "cloudinary";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import { dbConnect } from "../config/dbConnect";
import { userRouter } from "./routes/userRoutes";
import myRestaurantRoutes from "./routes/MyRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";
import orderRoute from "./routes/OrderRoute";
// config
dotenv.config();
const app = express();
cloudinary.v2.config({
  api_key: process.env.CLOUD_API_KEY,
  cloud_name: process.env.CLOUD_NAME,
  api_secret: process.env.CLOUD_API_SECRET,
});
// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use("/api/ordser/checkout/webhook", express.raw({ type: "*/*" }));
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server working!" });
});
// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/my/restaurant", myRestaurantRoutes);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoute);
// dbConnect
dbConnect();

app.listen(process.env.PORT, () => {
  console.log("Server is working!");
});
