import { client } from "../../database/connections.js";
import { categoryQuery, productsQuery } from "../../database/querys/inventary.query.js";


export const getProducts = async (req, res) => {
  try {
    const responce = await client.execute({
      sql: productsQuery.get,
      args: []
    })
    res.status(200).send(responce.rows)

  } catch (error) {
    res.status(500).send(error)
  }
}

export const insertProducts = async (req, res) => {
  try {
    const { name, description, price, measure, category } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'PI01' })

    if (!description) return res.status(400).send({ message: 'data description is required', body: req.body, codeError: 'PI02' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'PI01' })

    if (!measure) return res.status(400).send({ message: 'data measure is required', body: req.body, codeError: 'PI01' })

    if (!category) return res.status(400).send({ message: 'data category is required', body: req.body, codeError: 'PI01' })


    const responce = await client.execute({
      sql: productsQuery.insert,
      args: [name, description, price, measure, category]
    })

    res.status(200).send({ message: 'product registered successfully', data: responce })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const updateProducts = async (req, res) => {
  try {
    const { name, description, price, measure, category, id } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'PI01' })

    if (!description) return res.status(400).send({ message: 'data description is required', body: req.body, codeError: 'PI02' })

    if (!price) return res.status(400).send({ message: 'data price is required', body: req.body, codeError: 'PI03' })

    if (!measure) return res.status(400).send({ message: 'data measure is required', body: req.body, codeError: 'PI04' })

    if (!category) return res.status(400).send({ message: 'data category is required', body: req.body, codeError: 'PI05' })

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'PI06' })

    const responce = await client.execute({
      sql: productsQuery.update,
      args: [name, description, price, measure, category, id]
    })

    res.status(200).send({ message: 'product update successfully', data: responce })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'PD01' })


    const responce = await client.execute({
      sql: productsQuery.delete,
      args: [id]
    })

    res.status(200).send({ message: 'delete products succesfully', data: responce })

  } catch (error) {
    res.status(500).send(error)
  }
}