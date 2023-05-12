import { Request, Response } from "express";
import { createUserDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await createUserDB(userData);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();

  res.status(200).json({
    status: "success",
    data: users,
  });
};
// pattern
// route  ->  controller  ->  service
