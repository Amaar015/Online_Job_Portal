// Swagger API documentation
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
// imports Packages
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import ConnectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import helmet from "helmet";
import xss from "xss-clean";
import ExpressMongoSanitize from "express-mongo-sanitize";
// import routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoute from "./routes/jobRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

// rest objects
dotenv.config();

// connect DB
ConnectDB();
// swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal Application",
      description: "Node ExpressJs Job Portal Application",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const spec = swaggerDoc(options);

const app = express();

const port = process.env.PORT || 8000;

// app.use(helmet(``));
app.use(xss());
app.use(ExpressMongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobRoute);

//homeroute route
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));
// error Middleware
app.use(errorMiddleware);
// listen port
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} Mode ON port no ${port}`.bgCyan
      .white
  );
});
