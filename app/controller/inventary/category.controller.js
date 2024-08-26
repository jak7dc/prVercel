import { client } from "../../database/connections.js";
import { categoryQuery } from "../../database/querys/inventary.query.js";


export const getCategory = async (req, res) => {
  try {
    const responce = await client.execute({
      sql: categoryQuery.get,
      args: []
    })
    res.status(200).send(responce.rows)

  } catch (error) {
    res.status(500).send(error)
  }
}

export const insertCategory = async (req, res) => {
  try {
    const { name, description } = req.body

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'CI01' })

    if (!description) return res.status(400).send({ message: 'data description is required', body: req.body, codeError: 'CI02' })


    const responce = await client.execute({
      sql: categoryQuery.insert,
      args: [name, description]
    })

    res.status(200).send({ message: 'category registered successfully', data: responce })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const updateCategory = async (req, res) => {
  try {
    const { name, description, id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'CU01' })

    if (!name) return res.status(400).send({ message: 'data name is required', body: req.body, codeError: 'CU02' })

    if (!description) return res.status(400).send({ message: 'data description is required', body: req.body, codeError: 'CU03' })


    const responce = await client.execute({
      sql: categoryQuery.update,
      args: [name, description, id]
    })

    res.status(200).send({ message: 'update category successfully', data: responce })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.body

    if (!id) return res.status(400).send({ message: 'data id is required', body: req.body, codeError: 'CD01' })


    const responce = await client.execute({
      sql: categoryQuery.delete,
      args: [id]
    })

    res.status(200).send({ message: 'delete category successfully', data: responce })

  } catch (error) {
    res.status(500).send(error)
  }
}