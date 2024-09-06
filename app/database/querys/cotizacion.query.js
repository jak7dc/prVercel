export const priceListQuery = {
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
  get: `SELECT * FROM PriceList_items`,
  insert: `insert into PriceList_items 
  (plItems_limit, plItems_price, plItems_approximate ,priceList_id) 
  values ( ?, ?, ?, ?)`,
  update: `update PriceList_items 
  set plItems_limit= ?, plItems_price= ?, plItems_approximate= ? 
  where plItems_id= ?`,
  delete: `delete from PriceList_items where plItems_id= ?`
} 
