import userModel from "../models/userModel.js";

export const RegisterController = async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, email, password } = req.body;
    // validation
    if (!firstName) {
      return res
        .status(400)
        .send({ success: false, message: "Please Enter your Name" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "Please Enter your Email Address" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "Please Enter your Password" });
    }
    // check the user is already exists or not
    const ExistUser = await userModel.findOne({ email });
    if (ExistUser) {
      return res.status(200).send({
        success: false,
        message: "Email is already exists please use another or Login!",
      });
    }
    // create a new user
    const user = await userModel.create({ firstName, email, password });
    res.status(200).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    res.status(400).send({
      message: "Error in Register controller",
      success: false,
      error,
    });
    console.log(error);
  }
};
