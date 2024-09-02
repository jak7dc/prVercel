export const categoryQuery = {
  get: `select * from Category`,
  insert: `insert into Category (category_name, category_description) values ( ?, ?)`,
  update: `update Category set category_name= ? , category_description= ? where category_id= ?`,
  delete: `delete from Category where category_id= ?`
}

export const productsQuery = {
  get: `SELECT
          Products.product_id,
          Products.product_name,
          Products.product_description,
          Products.product_price,
          Products.product_measure,
          Products.category_id,
          Category.category_name
        FROM
          Products
          INNER JOIN Category ON Products.category_id = Category.category_id`,
  insert: `insert into Products 
  (product_name, product_description, product_price, product_measure, category_id) 
  values ( ?, ?, ?, ? ,?)`,
  update: `update Products 
  set product_name= ? , product_description= ?, product_price= ?, product_measure= ?, category_id= ? 
  where product_id= ?`,
  delete: `delete from Products where product_id= ?`
}