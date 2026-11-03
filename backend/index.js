import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import donateRoute from "./routes/donateRoute.js";
import recipientRoute from "./routes/recipientRoute.js";
import cors from "cors";
dotenv.config({
    path:".env"
})
databaseConnection();
const app = express(); 

// middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());
const corsOptions ={
    origin:['http://localhost:5174', 'http://127.0.0.1:50811', 'http://localhost:5173'],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// api
app.use("/api/user",userRoute);
app.use("/api/donate",donateRoute);
app.use("/api/request",recipientRoute);
 

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
})