import { Schema, model } from "mongoose";
import { IPost } from "../interfaces";

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
});

export const PostModel = model<IPost>("posts", postSchema);
