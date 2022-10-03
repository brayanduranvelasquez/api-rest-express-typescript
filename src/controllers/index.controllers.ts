import { Request, Response } from "express";
import axios from "axios";

const welcome = async (req: Request, res: Response): Promise<any> => {
  return res.send("¡Welcome!");
};

const getPost = async (req: Request, res: Response): Promise<any> => {
  try {
    const id: number = Number(req.params.id);
    const posts = await axios.get("http://localhost:9000/posts/" + id);

    return res.json({ data: posts.data, message: "" });
  } catch (err: any) {
    return res.json({ message: "Post no found" });
  }
};

const getPosts = async (req: Request, res: Response): Promise<any> => {
  try {
    const posts = await axios.get("http://localhost:9000/posts");
    return res.json({ data: posts.data, message: "" });
  } catch (err: any) {
    return res.json({ message: "Post no found" });
  }
};

const createPost = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, author } = req.body;
    const json: object = { title, author };

    const post = await axios.post("http://localhost:9000/posts", json);

    return res.json({ data: post.data, message: "Post successfully created" });
  } catch (err: any) {
    return res.json({ message: "Post no created" });
  }
};

const updatePost = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, author } = req.body;
    const id: number = Number(req.params.id);
    const json = {
      id,
      title,
      author,
    };

    const post = await axios.put(`http://localhost:9000/posts/${id}`, json);

    return res.json({ message: "Posts successfully updated", data: post.data });
  } catch (err: any) {
    return res.json({ message: "Data no updated" });
  }
};

const deletePost = async (req: Request, res: Response): Promise<any> => {
  try {
    const id: number = Number(req.params.id);
    const post = await axios.delete("http://localhost:9000/posts/" + id);

    return res.json({ message: "Posts successfully deleted", data: post.data });
  } catch (err: any) {
    return res.json({ message: "Data no deleted" });
  }
};

export { welcome, getPosts, getPost, createPost, updatePost, deletePost };
