import userModel from "../models/userModel.js";

export const RegisterController = async (req, res, next) => {
  const { firstName, email, password } = req.body;
  // validation
  if (!firstName) {
    next("Please Enter your name!");
  }
  if (!email) {
    next("Email address is required");
  }
  if (!password) {
    next("Password is required & password must be atleast 6 character");
  }
  const ExistingUser = await userModel.findOne({ email });
  if (ExistingUser) {
    next("Email Already Registered. Please login");
  }
  // create a new user
  const user = await userModel.create({ firstName, email, password });
  const token = user.createJWT();

  res.status(200).send({
    success: true,
    message: "User Register Successfully",
    user: {
      name: user.firstName,
      lastname: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const LoginController = async (req, res, next) => {};
