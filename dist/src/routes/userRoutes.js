"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const auth_1 = require("../middlewares/auth");
const validation_1 = require("../middlewares/validation");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/new", auth_1.jwtCheck, userControllers_1.createUser);
exports.userRouter.get("/me", auth_1.jwtCheck, auth_1.jwtParse, userControllers_1.getCurrentUser);
exports.userRouter.put("/me/update", auth_1.jwtCheck, auth_1.jwtParse, validation_1.validateMyUserRequest, userControllers_1.updateCurrentUser);
