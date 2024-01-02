import express from "express"

import {getUser} from "./controler.js"

export const userRouter = express.Router()

userRouter.route("/").get(getUser)

