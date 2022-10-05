import { Request, Response } from "express";
import { PostModel } from "../models/post.model";

const welcome = async (req: Request, res: Response): Promise<any> => {
  return res.send("Welcome to my API!");
};

const getPosts = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = await PostModel.find();
    return res.status(200).json({ data, message: "Data successfully found" });
  } catch (error) {
    return res.status(404).json({ message: "Posts couldnt be found" });
  }
};

const getPost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const _id: string = req.params._id;
    const data = await PostModel.find({ _id });

    return res.status(200).json({ data, message: "Data successfully found" });
  } catch (error) {
    return res.status(404).json({ message: "Post couldnt be found" });
  }
};

const createPost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, author } = req.body;
    const post = new PostModel({ title, author });
    const data = await post.save();

    return res.status(200).json({ data, message: "Post successfully created" });
  } catch (error) {
    return res.status(404).json({ message: "Post couldnt be created" });
  }
};

const updatePost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const _id: string = req.params._id;
    const { title, author } = req.body;
    const data = await PostModel.findByIdAndUpdate(_id, { title, author });

    return res.status(200).json({ data, message: "Post successfully updated" });
  } catch (error) {
    return res.status(404).json({ message: "Data couldnt be updated" });
  }
};

const deletePost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const _id: string = req.params._id;
    const data = await PostModel.findByIdAndDelete(_id);

    return res.status(200).json({ data, message: "Post successfully deleted" });
  } catch (error) {
    return res.status(404).json({ message: "Data couldnt be deleted" });
  }
};

export { welcome, getPosts, getPost, createPost, updatePost, deletePost };
