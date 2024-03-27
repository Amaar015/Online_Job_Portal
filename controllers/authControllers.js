import userModel from "../models/userModel.js";

export const RegisterController = async (req, res, next) => {
  const { firstName, email, location, password } = req.body;
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

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  console.log(email);
  // validation
  if (!email || !password) {
    next("Email & password are required");
  }
  // find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Username or Password");
  }

  // compare password
  console.log(`password ${password}`);
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid User Email & password");
  }
  console.log(` hell Amaar ${user.password}`);
  user.password = undefined;
  const token = user.createJWT();
  console.log(token);
  res.status(200).send({
    success: true,
    message: "Login Successfully",
    user,
    token,
  });
};

// auth
