import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();

dotenv.config();

// database connection
Connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
