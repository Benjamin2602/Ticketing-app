import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;

    connection.once("open", () => {
      console.log("Database connected");
    });

    connection.on("error", () => {
      console.log("Error connecting to database");
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}