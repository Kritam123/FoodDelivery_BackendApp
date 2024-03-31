"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dbConnect_1 = require("../config/dbConnect");
const userRoutes_1 = require("./routes/userRoutes");
// config 
dotenv_1.default.config();
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server working!" });
});
// userRoutes
app.use("/api/v1/user", userRoutes_1.userRouter);
// dbConnect
(0, dbConnect_1.dbConnect)();
app.listen(process.env.PORT, () => {
    console.log('Server is working!');
});
