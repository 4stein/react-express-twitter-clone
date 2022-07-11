import mongoose from "mongoose";

mongoose.Promise = Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/twitter",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB has connected successfully.");
    } else {
      console.log(err);
    }
  }
);

const db = mongoose.connection;

export { db, mongoose };
