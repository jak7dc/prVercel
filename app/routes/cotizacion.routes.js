import { Router } from "express";
import { isAuthenticated } from "./protectet.routes.js";
import { deletePriceList, getPriceList, insertPriceList, searchPriceList, updatePriceList } from "../controller/cotizacion/priceList.controller.js";
import { deletePriceListItems, getPriceListItems, insertPriceListItems, updatePriceListItems } from "../controller/cotizacion/priceList_items.controller.js";
import { deleteCotizacion, getCotizacionList, insertCotizacion, searchCotizacion, updateCotizacion } from "../controller/cotizacion/cotizacion.controller.js";
import { deleteCotItem, getCotItem, insertCotItem, updateCotItem } from "../controller/cotizacion/cotizacion_items.controller.js";

const router = Router()

router.get('/priceList', isAuthenticated, getPriceList)
router.post('/priceList', isAuthenticated, insertPriceList)
router.put('/priceList', isAuthenticated, updatePriceList)
router.delete('/priceList', isAuthenticated, deletePriceList)
router.post('/priceListSearch', isAuthenticated, searchPriceList)

router.post('/priceList_itemsSearch', isAuthenticated, getPriceListItems)
router.post('/priceList_items', isAuthenticated, insertPriceListItems)
router.put('/priceList_items', isAuthenticated, updatePriceListItems)
router.delete('/priceList_items', isAuthenticated, deletePriceListItems)

router.get('/cotizacion', isAuthenticated, getCotizacionList)
router.post('/cotizacion', isAuthenticated, insertCotizacion)
router.put('/cotizacion', isAuthenticated, updateCotizacion)
router.delete('/cotizacion', isAuthenticated, deleteCotizacion)
router.post('/cotizacionSearch', isAuthenticated, searchCotizacion)

router.post('/cotizacion_itemsSearch', isAuthenticated, getCotItem)
router.post('/cotizacion_items', isAuthenticated, insertCotItem)
router.put('/cotizacion_items', isAuthenticated, updateCotItem)
router.delete('/cotizacion_items', isAuthenticated, deleteCotItem)



export default router