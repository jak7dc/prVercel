import { Router } from "express";
import { isAuthenticated } from "./protectet.routes.js";
import { deleteCategory, getCategory, insertCategory, updateCategory } from "../controller/inventary/category.controller.js";
import { deleteProducts, getProducts, insertProducts, updateProducts } from "../controller/inventary/products.controller.js";

const router = Router()

router.get('/category', isAuthenticated, getCategory)
router.post('/category', isAuthenticated, insertCategory)
router.put('/category', isAuthenticated, updateCategory)
router.delete('/category', isAuthenticated, deleteCategory)

router.get('/products', isAuthenticated, getProducts)
router.post('/products', isAuthenticated, insertProducts)
router.put('/products', isAuthenticated, updateProducts)
router.delete('/products', isAuthenticated, deleteProducts)


export default router