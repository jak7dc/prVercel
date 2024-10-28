import { client } from "../../database/connections.js";
import { cotItemsQuery } from "../../database/querys/cotizacion.query.js";

export const getCotItem = async (req, res) => {
  try {
    const { search } = req.body

    if (!search) return res.status(400).send({ message: 'data saerch is required', body: req.body, codeError: 'COT_S01' })

    const response = await client.execute({
      sql: cotItemsQuery.get,
      args: [search]
    })

    res.status(200).send(response.rows)

  } catch (error) {
    res.status(500).send(error)
  }
}

export const insertCotItem = async (req, res) => {
  try {
    const { name, item, quantity, price, measure, utilitis, total, cotizacionId, priceList } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'COT_I01' })

    if (!item) return res.status(400).send({ message: 'data item is required', body: req.body, codeError: 'COT_I02' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'COT_I03' })

    if (!quantity) return res.status(400).send({ message: 'data quantity is required', body: req.body, codeError: 'COT_I04' })

    if (!measure) return res.status(400).send({ message: 'data measure is required', body: req.body, codeError: 'COT_I05' })

    if (!utilitis) return res.status(400).send({ message: 'data utilitis  is required', body: req.body, codeError: 'COT_I06' })

    if (!cotizacionId) return res.status(400).send({ message: 'data cotizacionId is required', body: req.body, codeError: 'COT_I07' })

    if (!total) return res.status(400).send({ message: 'data total is required', body: req.body, codeError: 'COT_I07' })

    if (!priceList) return res.status(400).send({ message: 'data priceList is required', body: req.body, codeError: 'COT_I08' })


    const response = await client.execute({
      sql: cotItemsQuery.insert,
      args: [name, item, quantity, price, measure, utilitis, total, cotizacionId, priceList]
    })

    res.status(200).send({ message: 'cotizacion items registered successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const updateCotItem = async (req, res) => {
  try {

    const { name, item, quantity, price, measure, utilitis, total, id, priceList } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'COT_I01' })

    if (!item) return res.status(400).send({ message: 'data item is required', body: req.body, codeError: 'COT_I02' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'COT_I03' })

    if (!quantity) return res.status(400).send({ message: 'data quantity is required', body: req.body, codeError: 'COT_I04' })

    if (!measure) return res.status(400).send({ message: 'data measure is required', body: req.body, codeError: 'COT_I05' })

    if (!utilitis) return res.status(400).send({ message: 'data utilitis  is required', body: req.body, codeError: 'COT_I06' })

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'COT_I07' })

    if (!total) return res.status(400).send({ message: 'data total is required', body: req.body, codeError: 'COT_I07' })

    if (!priceList) return res.status(400).send({ message: 'data priceList is required', body: req.body, codeError: 'COT_I08' })

    const response = await client.execute({
      sql: cotItemsQuery.update,
      args: [name, item, quantity, price, measure, utilitis, total, priceList, id]
    })

    res.status(200).send({ message: 'update cotizacion items successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const deleteCotItem = async (req, res) => {
  try {
    const { id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'COT_D01' })


    const response = await client.execute({
      sql: cotItemsQuery.delete,
      args: [id]
    })

    res.status(200).send({ message: 'delete price list successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}