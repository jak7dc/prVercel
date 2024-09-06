import { Router } from "express";
import { isAuthenticated } from "./protectet.routes.js";
import { deletePriceList, getPriceList, insertPriceList, updatePriceList } from "../controller/cotizacion/priceList.controller.js";
import { deletePriceListItems, getPriceListItems, insertPriceListItems, updatePriceListItems } from "../controller/cotizacion/priceList_items.controller.js";

const router = Router()

router.get('/priceList', isAuthenticated, getPriceList)
router.post('/priceList', isAuthenticated, insertPriceList)
router.put('/priceList', isAuthenticated, updatePriceList)
router.delete('/priceList', isAuthenticated, deletePriceList)

router.get('/priceList_items', isAuthenticated, getPriceListItems)
router.post('/priceList_items', isAuthenticated, insertPriceListItems)
router.put('/priceList_items', isAuthenticated, updatePriceListItems)
router.delete('/priceList_items', isAuthenticated, deletePriceListItems)

export default router