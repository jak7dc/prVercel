import { client } from "../../database/connections.js"
import { priceList_itemsQuery } from "../../database/querys/cotizacion.query.js"

export const getPriceListItems = async (req, res) => {
  try {

    const response = await client.execute({
      sql: priceList_itemsQuery.get,
      args: []
    })

    res.status(200).send(response.rows)

  } catch (error) {
    res.status(500).send(error)
  }
}

export const insertPriceListItems = async (req, res) => {
  try {
    const { limit, price, approximate, listPriceId } = req.body

    if (!limit) return res.status(400).send({ message: 'data limit is required', body: req.body, codeError: 'PLI_I01' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'PLI_I02' })

    if (!approximate) return res.status(400).send({ message: 'data approximate is required', body: req.body, codeError: 'PLI_I03' })

    if (!listPriceId) return res.status(400).send({ message: 'data listPriceId is required', body: req.body, codeError: 'PLI_I03' })

    const response = await client.execute({
      sql: priceList_itemsQuery.insert,
      args: [limit, price, approximate, listPriceId]
    })

    res.status(200).send({ message: 'price list item registered successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const updatePriceListItems = async (req, res) => {
  try {

    const { limit, price, approximate, id } = req.body

    if (!limit) return res.status(400).send({ message: 'data limit is required', body: req.body, codeError: 'PLI_U01' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'PLI_U02' })

    if (!approximate) return res.status(400).send({ message: 'data approximate is required', body: req.body, codeError: 'PLI_U03' })

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'PLI_U04' })

    const response = await client.execute({
      sql: priceList_itemsQuery.update,
      args: [limit, price, approximate, id]
    })

    res.status(200).send({ message: 'update price list item successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const deletePriceListItems = async (req, res) => {
  try {
    const { id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'PLI_D01' })


    const response = await client.execute({
      sql: priceList_itemsQuery.delete,
      args: [id]
    })

    res.status(200).send({ message: 'delete price list item successfully', data: response })

  } catch (error) {
    res.status(500).send(error)
  }
}