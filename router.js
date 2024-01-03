import express from "express"

import {getUser, postUser, deleteUser, updateUser, getAllUser} from "./controler.js"

export const userRouter = express.Router()

userRouter.route("/").post(postUser).get(getAllUser)
userRouter.route("/:id").get(getUser).delete(deleteUser).put(updateUser)

