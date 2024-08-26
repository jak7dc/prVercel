import { client } from '../database/connections.js'

export const getUsers = async (req, res) => {
  try {
    const responce = await client.execute({
      sql: `SELECT * FROM Users`,
      args: []
    })
    res.status(200).send(responce)
  } catch (error) {
    res.status(500).send(error)
  }
}