// import
import express from "express";
import {
  LoginController,
  RegisterController,
} from "../controllers/authControllers.js";

// router objects
const router = express.Router();

// routes
// Register and post
router.post("/register", RegisterController);

// Login and Post
router.post("/login", LoginController);

// export
export default router;
