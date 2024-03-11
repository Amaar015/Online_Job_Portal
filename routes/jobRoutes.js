import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  JobStatsController,
  createJobCollector,
  deleteJobController,
  getJobController,
  updateJobController,
} from "../controllers/jobController.js";

const router = express.Router();

// routes
// Creat job || post
router.post("/create-job", userAuth, createJobCollector);
// Get job || GET
router.get("/get-job", userAuth, getJobController);
// Update job || PUT || PATCH
router.patch("/update-job/:id", userAuth, updateJobController);

// Delete job || Delete
router.delete("/delete-job/:id", userAuth, deleteJobController);

// jobs stats filter  || GET
router.get("/job-stats", userAuth, JobStatsController);

export default router;
