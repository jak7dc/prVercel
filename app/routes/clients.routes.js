import { Router } from "express";
import { deleteClients, getClients, insertClients, updateClients } from "../controller/clients.controller.js";
import { isAuthenticated } from "./protectet.routes.js";

const router = Router()

router.get('/clients', isAuthenticated, getClients)
router.post('/clients', isAuthenticated, insertClients)
router.put('/clients', isAuthenticated, updateClients)
router.delete('/clients', isAuthenticated, deleteClients)



export default router