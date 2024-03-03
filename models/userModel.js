import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "First Name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: [true, "Email address is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
      minlength: [6, "Password atleast 6 character"],
    },
    location: {
      type: String,
      default: "Pakistan",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
