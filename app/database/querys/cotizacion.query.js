export const priceListQuery = {
  search: `SELECT * FROM PriceList WHERE priceList_id = ?`,
  get: `SELECT * FROM PriceList`,
  insert: `insert into PriceList 
  (priceList_name, priceList_description, priceList_measure, priceList_price, priceList_utilitis) 
  values ( ?, ?, ?, ? ,?)`,
  update: `update PriceList 
  set priceList_name= ?, priceList_description= ?, priceList_measure= ?, priceList_price= ?, priceList_utilitis= ? 
  where priceList_id= ?`,
  delete: `delete from PriceList where priceList_id= ?`
}

export const priceList_itemsQuery = {
  get: `SELECT * FROM PriceList_items  where priceList_id=? order by plItems_limit ASC`,
  insert: `insert into PriceList_items 
  (plItems_limit, plItems_price, plItems_approximate ,priceList_id) 
  values ( ?, ?, ?, ?)`,
  update: `update PriceList_items 
  set plItems_limit= ?, plItems_price= ?, plItems_approximate= ? 
  where plItems_id= ?`,
  delete: `delete from PriceList_items where plItems_id= ?`
}

export const cotizacionQuery = {
  search: `SELECT
    Cotizacion.cotizacion_id,
    Cotizacion.cotizacion_name,
    Cotizacion.client_id,
    Cotizacion.cotizacion_quantity,
    Clients.client_name,
    Cotizacion.cotizacion_price,
    Cotizacion.cotizacion_cost,
    Cotizacion.cotizacion_total
      FROM
    Cotizacion
      INNER JOIN Clients ON Cotizacion.client_id = Clients.client_id
      where Cotizacion.cotizacion_id= ?`,
  get: `SELECT
    Cotizacion.cotizacion_id,
    Cotizacion.cotizacion_name,
    Cotizacion.client_id,
    Cotizacion.cotizacion_quantity,
    Clients.client_name,
    Cotizacion.cotizacion_price,
    Cotizacion.cotizacion_cost,
    Cotizacion.cotizacion_total
      FROM
    Cotizacion
      INNER JOIN Clients ON Cotizacion.client_id = Clients.client_id`,
  insert: `insert into Cotizacion 
  (cotizacion_name, client_id, cotizacion_quantity, cotizacion_price, cotizacion_cost, cotizacion_total) 
  values ( ?, ?, ?, ?, ?, ?)`,
  update: `update Cotizacion 
  set cotizacion_name =?, client_id=?, cotizacion_quantity=? ,cotizacion_price=?, cotizacion_cost=?, cotizacion_total=?  
  where cotizacion_id= ?`,
  delete: `delete from Cotizacion where cotizacion_id= ?`
}

export const cotItemsQuery = {
  get: `SELECT 
  cotItem_id,cotItem_name, cotItem_item, cotItem_quantity, cotItem_price, cotItem_measure, cotItem_utilitis, cotItem_total , priceList_id
  FROM Cotizacion_items where cotizacion_id=?`,
  insert: `insert into Cotizacion_items
  (cotItem_name, cotItem_item, cotItem_quantity, cotItem_price, cotItem_measure, cotItem_utilitis, cotItem_total ,cotizacion_id, priceList_id) 
  values ( ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  update: `update Cotizacion_items
  set cotItem_name=?, cotItem_item=? , cotItem_quantity=? , cotItem_price=? , cotItem_measure=? , cotItem_utilitis=?, cotItem_total=?, priceList_id  
  where cotItem_id= ?`,
  delete: `delete from Cotizacion_items where cotItem_id= ?`
}