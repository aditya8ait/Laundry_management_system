import express from "express";
import cors from 'cors';
import dbConnect from "./dbConnect.js";
import userRoutes from "./routes/userRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

dbConnect()
    .then(() => console.log("Database Connected Successfully"))
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });

app.use(cors({
    origin: 'http://localhost:3000',    
    credentials: true
}));

app.use(express.json({ limit: '50mb' }));

app.use(userRoutes);
app.use(staffRoutes);

app.listen(5000, function () {
    console.log("Server started on port 5000");
});