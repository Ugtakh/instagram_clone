import mongoose from "mongoose";

// mongoose.connect(uri, { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

const connectDb = async (dbUri: string) => {
  try {
    const connect = await mongoose.connect(dbUri);
    console.log(
      "MongoDB database connection established successfullyt: ",
      connect.connection.host
    );
  } catch (err) {
    console.log("Mongo-Error:", err);
  }
};

export default connectDb;
