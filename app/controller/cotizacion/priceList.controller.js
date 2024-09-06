import { client } from "../../database/connections.js"
import { priceListQuery } from "../../database/querys/cotizacion.query.js"

export const getPriceList = async (req, res) => {
  try {

    const response = await client.execute({
      sql: priceListQuery.get,
      args: []
    })

    res.status(200).send(response.rows)

  } catch (error) {
    res.status(500).send(error)
  }
}

export const insertPriceList = async (req, res) => {
  try {
    const { name, description, measure, price, utilitis } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'COT_I01' })

    if (!description) return res.status(400).send({ message: 'data description is required', body: req.body, codeError: 'COT_I02' })

    if (!measure) return res.status(400).send({ message: 'data measure is required', body: req.body, codeError: 'COT_I03' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'COT_I04' })

    if (!utilitis) return res.status(400).send({ message: 'data utilitis is required', body: req.body, codeError: 'COT_I05' })


    const response = await client.execute({
      sql: priceListQuery.insert,
      args: [name, description, measure, price, utilitis]
    })

    res.status(200).send({ message: 'price list registered successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const updatePriceList = async (req, res) => {
  try {
    const { name, description, measure, price, utilitis, id } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'COT_U01' })

    if (!description) return res.status(400).send({ message: 'data description is required', body: req.body, codeError: 'COT_U02' })

    if (!measure) return res.status(400).send({ message: 'data measure is required', body: req.body, codeError: 'COT_U03' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'COT_U04' })

    if (!utilitis) return res.status(400).send({ message: 'data utilitis is required', body: req.body, codeError: 'COT_U05' })

    const response = await client.execute({
      sql: priceListQuery.update,
      args: [name, description, measure, price, utilitis, id]
    })

    res.status(200).send({ message: 'update price list successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const deletePriceList = async (req, res) => {
  try {
    const { id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'COT_D01' })


    const response = await client.execute({
      sql: priceListQuery.delete,
      args: [id]
    })

    res.status(200).send({ message: 'delete price list successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}