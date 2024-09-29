import mongoose from "mongoose";

const mongoConnect = () => {
  try {
    mongoose.connect(process.env.MONGOURL);
    console.log("Conncted to MongoDB database.");
  } catch (err) {
    console.error(`Cannot connect to MongoDB database.`, err);
  }
};

export default mongoConnect;
