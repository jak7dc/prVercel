import { client } from "../database/connections.js"
import { clientsQuery } from "../database/querys/clients.query.js"

export const getClients = async (req, res)=>{
  try {
    const response = await client.execute({
      sql: clientsQuery.get,
      args: []
    })
    res.status(200).send(response.rows)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const insertClients = async (req, res) => {
  try {
    const { name, typeDoc, doc, addres, mail, phone, service, contact } = req.body

    
    if (!typeDoc) return res.status(400).send({ message: 'data typeDoc is required', body: req.body, codeError: 'CLI_I01' })
      
    if (!doc) return res.status(400).send({ message: 'data doc is required', body: req.body, codeError: 'CLI_I02' })
        
    if (!addres) return res.status(400).send({ message: 'data addres is required', body: req.body, codeError: 'CLI_I03' })
          
    if (!mail) return res.status(400).send({ message: 'data mail is required', body: req.body, codeError: 'CLI_I04' })
            
    if (!phone) return res.status(400).send({ message: 'data phone is required', body: req.body, codeError: 'CLI_I05' })
              
    if (!service) return res.status(400).send({ message: 'data service is required', body: req.body, codeError: 'CLI_I06' })
                
    if (!contact) return res.status(400).send({ message: 'data contact is required', body: req.body, codeError: 'CLI_I07' })
                  
    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'CLI_I08' })

    const response = await client.execute({
      sql: clientsQuery.insert,
      args: [name, typeDoc, doc, addres, mail, phone, service, contact]
    })

    res.status(200).send({ message: 'client registered successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const updateClients = async (req, res) => {
  try {
    
    const {name, typeDoc, doc, addres, mail, phone, service, contact, id } = req.body

    if (!typeDoc) return res.status(400).send({ message: 'data typeDoc is required', body: req.body, codeError: 'CLI_U01' })

    if (!doc) return res.status(400).send({ message: 'data doc is required', body: req.body, codeError: 'CLI_U02' })

    if (!addres) return res.status(400).send({ message: 'data addres is required', body: req.body, codeError: 'CLI_U03' })

    if (!mail) return res.status(400).send({ message: 'data mail is required', body: req.body, codeError: 'CLI_U04' })

    if (!phone) return res.status(400).send({ message: 'data phone is required', body: req.body, codeError: 'CLI_U05' })

    if (!service) return res.status(400).send({ message: 'data service is required', body: req.body, codeError: 'CLI_U06' })

    if (!contact) return res.status(400).send({ message: 'data contact is required', body: req.body, codeError: 'CLI_U07' })

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'CLI_U07' })

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'CLU_I08' })
    
      const response = await client.execute({
      sql: clientsQuery.update,
      args: [name, typeDoc, doc, addres, mail, phone, service, contact, id]
    })

    res.status(200).send({ message: 'contact update list successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const deleteClients = async (req, res) => {
  try {
    const { id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'CLI_D01' })


    const response = await client.execute({
      sql: clientsQuery.delete,
      args: [id]
    })

    res.status(200).send({ message: 'delete client successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}