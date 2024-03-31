import express from "express";
import { createUser, getCurrentUser, updateCurrentUser } from "../controllers/userControllers";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserRequest } from "../middlewares/validation";

export const userRouter = express.Router();

userRouter.post("/new",jwtCheck,createUser);
userRouter.get("/me",jwtParse,getCurrentUser);
userRouter.put("/me/update",jwtCheck,jwtParse,validateMyUserRequest,updateCurrentUser);
