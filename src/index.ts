import * as dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
dotenv.config();

import { router } from "./routes";
import { CONFIG } from "./config";
import "./database";

const app: Application = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.listen(CONFIG.PORT, () => {
  try {
    return console.log(`Server ready on port ${CONFIG.PORT}`);
  } catch {
    throw new Error("Server error");
  }
});
