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
      select: true,
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
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// compare password
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

// json webtoken
userSchema.methods.createJWT = function () {
  // sign({which data base for generat token}, {add a secret key}, {give the expire time})
  return JWT.sign({ userId: this._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};
export default mongoose.model("User", userSchema);
