import mongoose from "mongoose";
import colors from "colors";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB Database`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB error ${error}`.bgRed.white);
  }
};

export default ConnectDB;

// useNewUrlParser: true,
// useUnifiedTopology: true,
