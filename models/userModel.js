import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

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
      select: false,
    },
    location: {
      type: String,
      default: "Pakistan",
    },
  },
  { timestamps: true }
);

// midleware to hash password
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// json webtoken
userSchema.methods.createJWT = function () {
  // sign({which data base for generat token}, {add a secret key}, {give the expire time})
  return JWT.sign({ userId: this._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};
export default mongoose.model("User", userSchema);
