import { client } from "../../database/connections.js";
import { cotizacionQuery } from "../../database/querys/cotizacion.query.js";

export const searchCotizacion = async (req, res) => {
  try {
    const { search } = req.body
    const response = await client.execute({
      sql: cotizacionQuery.search,
      args: [search]
    })

    res.status(200).send(response.rows)

  } catch (error) {
    res.status(500).send(error)
  }
}


export const getCotizacionList = async (req, res) => {
  try {

    const response = await client.execute({
      sql: cotizacionQuery.get,
      args: []
    })

    res.status(200).send(response.rows)

  } catch (error) {
    res.status(500).send(error)
  }
}

export const insertCotizacion = async (req, res) => {
  try {
    const { name, clientId, quantity, price, cost, total } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'COT_I01' })

    if (!clientId) return res.status(400).send({ message: 'data clientId is required', body: req.body, codeError: 'COT_I02' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'COT_I03' })

    if (!cost) return res.status(400).send({ message: 'data cost is required', body: req.body, codeError: 'COT_I04' })

    if (!quantity) return res.status(400).send({ message: 'data quantity is required', body: req.body, codeError: 'COT_I05' })

    if (!total) return res.status(400).send({ message: 'data total is required', body: req.body, codeError: 'COT_I06' })

    const response = await client.execute({
      sql: cotizacionQuery.insert,
      args: [name, clientId, quantity, price, cost, total]
    })

    res.status(200).send({ message: 'cotizacion registered successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const updateCotizacion = async (req, res) => {
  try {
    const { name, clientId, quantity, price, cost, total, id } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'COT_U01' })

    if (!clientId) return res.status(400).send({ message: 'data clientId is required', body: req.body, codeError: 'COT_U02' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'COT_U03' })

    if (!cost) return res.status(400).send({ message: 'data cost is required', body: req.body, codeError: 'COT_U04' })

    if (!id) return res.status(400).send({ message: 'data is is required', body: req.body, codeError: 'COT_U05' })

    if (!quantity) return res.status(400).send({ message: 'data quantity is required', body: req.body, codeError: 'COT_I05' })

    if (!total) return res.status(400).send({ message: 'data total is required', body: req.body, codeError: 'COT_I06' })

    const response = await client.execute({
      sql: cotizacionQuery.update,
      args: [name, clientId, quantity, price, cost, total, id]
    })

    res.status(200).send({ message: 'update cotizacion successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const deleteCotizacion = async (req, res) => {
  try {
    const { id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'COT_D01' })


    const response = await client.execute({
      sql: cotizacionQuery.delete,
      args: [id]
    })

    res.status(200).send({ message: 'delete price list successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}