import mongoose from "mongoose";
import jobModel from "../models/jobModel.js";
import moment from "moment";
// create a job controller
export const createJobCollector = async (req, res, next) => {
  const { company, position } = req.body;
  if (!company || !position) {
    next("All fields are required");
  }
  req.body.createdBy = req.user.userId;
  const job = await jobModel.create(req.body);
  res.status(201).json({ job });
};

// get all jobs
export const getJobController = async (req, res, next) => {
  //  get these values from local url
  const { status, workType, search, sort } = req.query;
  //  conditions for searching job filters
  const queryObject = {
    createdBy: req.user.userId,
  };
  // logic for filters
  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (workType && workType !== "all") {
    queryObject.workType = workType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }

  // get filtered job
  let queryResult = jobModel.find(queryObject);
  // sorting
  if (sort === "latest") {
    queryResult = queryResult.sort("-createdAt");
  }
  if (sort === "oldest") {
    queryResult = queryResult.sort("createdAt");
  }
  if (sort === "a-z") {
    queryResult = queryResult.sort("position");
  }
  if (sort === "z-a") {
    queryResult = queryResult.sort("-position");
  }

  //  pagination from backend
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  queryResult = queryResult.skip(skip).limit(limit);
  // total jobs count
  const totalJobs = await jobModel.countDocuments(queryResult);
  const numOfPage = Math.ceil(totalJobs / limit);

  const job = await queryResult;
  // const job = await jobModel.find({ createdBy: req.user.userId });
  res.status(200).json({
    totalJobs,
    job,
    numOfPage,
  });
};
// ======= UPDATE JOBS ===========
export const updateJobController = async (req, res, next) => {
  const { id } = req.params;
  const { company, position } = req.body;
  //validation
  if (!company || !position) {
    next("Please Provide All Fields");
  }
  //find job
  const job = await jobModel.findOne({ _id: id });
  //validation
  if (!job) {
    next(`no jobs found with this id ${id}`);
  }
  if (!req.user.userId === job.createdBy.toString()) {
    next("Your Not Authorized to update this job");
    return;
  }
  const updateJob = await jobModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  //res
  res.status(200).json({ updateJob });
};

export const deleteJobController = async (req, res, next) => {
  const { id } = req.params;
  // find job
  const job = await jobModel.findOne({ _id: id });
  // validation
  if (!job) {
    next("No job Find  with this data");
  }
  if (!req.user.userId === job.createdBy.toString()) {
    next("You have no authorized to delete data");
    return;
  }
  await job.deleteOne();
  res.status(200).json({ message: "Success, Job deleted" });
};

export const JobStatsController = async (req, res) => {
  const stats = await jobModel.aggregate([
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(req.user.userId),
      },
    },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  // default stats
  const defaultStats = {
    pending: stats.pending || 0,
    reject: stats.reject || 0,
    interview: stats.interview || 0,
  };

  //monthly yearly stats
  let monthlyApplication = await jobModel.aggregate([
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(req.user.userId),
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: {
          $sum: 1,
        },
      },
    },
  ]);
  monthlyApplication = monthlyApplication
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res
    .status(200)
    .json({ totaljob: stats.length, stats, defaultStats, monthlyApplication });
};