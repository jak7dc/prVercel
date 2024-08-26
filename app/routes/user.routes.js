import { Router } from "express";
import { getUsers } from "../controller/user.controller.js";

const router = Router()

router.get('/getUser', getUsers)

export default router