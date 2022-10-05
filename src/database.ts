import mongoose from "mongoose";
import { CONFIG } from "./config";

const startDB = async function () {
  return await mongoose
    .connect(CONFIG.MONGODB_URI)
    .then(() => {
      console.log("Database ready to use");
    })
    .catch((error) => console.log(error));
};

startDB();

export default startDB;
