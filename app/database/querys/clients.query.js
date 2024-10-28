export const clientsQuery = {
  get: `SELECT * FROM Clients`,
  insert: `insert into Clients 
  (client_name, client_type_doc, client_doc, client_addres, client_mail, client_phone, client_service, client_contact) 
  values (?, ?, ?, ?, ?, ?, ?, ?)`,
  update: `update Clients 
  set client_name =?, client_type_doc =?, client_doc =?, client_addres =?, client_mail =?, client_phone =?, 
  client_service =?, client_contact =? 
  where client_id= ?`,
  delete: `delete from Clients where client_id= ?`
} 