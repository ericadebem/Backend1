import { response } from "express";
import { Users } from "./model.js";

export const getUser = async (request, response) => {
  try {
    const user = await Users.create(request.body);
    response.status(201).json({ user });
  } catch (error) {
    console.error(error.msg);
    response.status(500).json(error);
  }
};
