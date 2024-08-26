import { Router } from "express";
import { getUsers, CreateUser, Login, getInfo } from "../controller/user.controller.js";
import { isAuthenticated } from "./protectet.routes.js";

const router = Router()

router.get('/getUser', getUsers)
router.post('/register', CreateUser)
router.post('/login', Login)
router.get('/autenticated', isAuthenticated, getInfo)

export default router