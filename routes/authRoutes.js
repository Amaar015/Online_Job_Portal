// import
import express from "express";
import { RegisterController } from "../controllers/authControllers.js";

// router objects
const router = express.Router();

// routes
router.post("/register", RegisterController);
// text route

// export
export default router;
