import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  const { firstName, email, lastName, location } = req.body;
  if (!firstName || !email || !lastName || !location) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  user.name = firstName;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
  const token = user.createJWT();
  res.status(200).json({
    user,
    token,
  });
};
