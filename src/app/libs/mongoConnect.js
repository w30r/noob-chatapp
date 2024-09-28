import mongoose from "mongoose";

const mongoConnect = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/api-schetApp");
    console.log("Conncted to MongoDB database.");
  } catch (err) {
    console.error(`Cannot connect to MongoDB database.`, err);
  }
};

export default mongoConnect;
