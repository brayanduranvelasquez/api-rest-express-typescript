import { Request, Response } from "express";

const getUsers = (req: Request, res: Response) => {
  res.json({ nickname: "miguel123", password: "12341234" });
};

const getUser = (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  if (!id) {
    throw new Error("ID no founded");
  }

  return res.json({ id });
};

const createUser = (req: Request, res: Response) => {
  return res.json({ message: "User created" });
};

const updateUser = (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  if (!id) {
    throw new Error("ID no founded");
  }

  return res.json({ id });
};

const deleteUser = (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  if (!id) {
    throw new Error("ID no founded");
  }

  return res.json({ id });
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
