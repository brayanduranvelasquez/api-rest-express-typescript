import { Document } from "mongoose";

export interface IConfig {
  PORT: string | number;
  MONGODB_URI: string;
}

export interface IPost extends Document {
  title: string;
  author: string;
}
