import * as dotenv from "dotenv";
import express, { Application } from "express";
import { router } from "./routes";
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
  try {
    return console.log(`Server ready on port ${PORT}`);
  } catch {
    throw new Error("Server error");
  }
});
