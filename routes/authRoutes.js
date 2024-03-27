// import
import express from "express";
import {
  RegisterController,
  loginController,
} from "../controllers/authControllers.js";
import rateLimit from "express-rate-limit";
import userAuth from "../middleware/authMiddleware.js";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// router objects
const router = express.Router();

// routes
/**
 *
 */

// Register and post
router.post("/register", limiter, RegisterController);

// Login and Post
router.post("/login", loginController);

// Auth controller

// export
export default router;
