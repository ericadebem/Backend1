import { response } from "express";
import { Users } from "./model.js";

export const getUser = async (request, response) => {
  try {
    const user = await Users.findById(request.params.id);
    user
      ? response.status(201).json({ user })
      : response.status(404).json({ msg: "User not found" });
  } catch (error) {
    console.error(error.msg);
    response.status(500).json(error);
  }
};

export const postUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    console.error(error.msg);
    response.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    user
      ? res.status(201).json({ user })
      : res.status(404).json({ msg: "User not found" });
  } catch (error) {
    console.error(error.msg);
    response.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    user
      ? res.status(201).json({ user })
      : res.status(404).json({ msg: "User not found" });
  } catch (error) {
    console.error(error.msg);
    response.status(500).json(error);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await Users.find()
    res.status(201).json({users})
  }catch(error){
    console.error(error.msg);
    res.status(500).json(error);
  }
}