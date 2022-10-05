import { IConfig } from "../interfaces";

const CONFIG: IConfig = {
  PORT: process.env.PORT || 8082,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/api-rest-test-express-typescript",
};

export { CONFIG };
