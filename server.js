// imports\
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import ConnectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
// import routes
import authRoutes from "./routes/authRoutes.js";

// rest objects
dotenv.config();

// connect DB
ConnectDB();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// routes

app.use("/api/v1/auth", authRoutes);
// listen port
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} Mode ON port no ${port}`.bgCyan
      .white
  );
});
