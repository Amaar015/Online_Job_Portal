import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  getUserController,
  updateUserController,
} from "../controllers/userController.js";

const router = express.Router();

// routes

// get user

// update user
router.put("/update-user", userAuth, updateUserController);

// get user data // post
router.post("/getUser", userAuth, getUserController);
export default router;
