import { client } from '../database/connections.js'
import bcrypt from "bcrypt";
import jsonJwt from "jsonwebtoken";
import config from '../config.js';

export const getUsers = async (req, res) => {
  try {
    const response = await client.execute({
      sql: `SELECT * FROM Users`,
      args: []
    })
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const CreateUser = async (req, res) => {
  try {
    const { username, password } = req.body

    const match = await client.execute({
      sql: `SELECT * FROM Users  WHERE userName = ?`,
      args: [username]
    })

    const user = match.rows[0]

    if (!username) return res.status(400).send({ message: 'user name is required', body: req.body, errorCode: 'U1' })

    if (!password) return res.status(400).send({ message: 'user password is required', body: req.body, errorCode: 'U2' })

    if (user) {
      return res.status(400).send({ message: 'username in use', body: req.body, errorCode: 'U3' })
    }

    const salt = await bcrypt.genSalt()
    const hashed = await bcrypt.hash(password, salt)

    const response = await client.execute({
      sql: `INSERT INTO Users (userName , userPassword, userSalt) VALUES ( ?, ?, ?)`,
      args: [username, hashed, salt]
    })

    if (response.rowsAffected) return res.status(200).send({ message: 'user registered succesfully', data: responce })

    return res.status(500).send({ message: 'server error' })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body

    const match = await client.execute({
      sql: `SELECT * FROM Users  WHERE userName = ?`,
      args: [username]
    })

    const user = match.rows[0]


    if (!user) {
      return res.status(400).send({ message: 'user or password incorrect', body: req.body, errorCode: 'U4' })
    }

    const isMatch = await bcrypt.compare(password, user.userPassword)
    if (!isMatch) return res.status(400).send({ message: 'user or password incorrect', body: req.body, errorCode: 'U4' })

    const token = jsonJwt.sign(user.user_id, config.strKey)
    res.status(200).send({ token: token })

  } catch (error) {
    res.status(500).send(error)
  }
}

export const findAssignUser = async (req, res, next) => {
  try {

    const match = await client.execute({
      sql: `SELECT * FROM Users  WHERE user_id = ?`,
      args: [req.auth]
    })

    const user = match.rows[0]

    if (!user) return res.status(400).end()

    req.auth = user
    next()

  } catch (error) {
    next(error)
  }
}

export const getInfo = (req, res) => {
  try {
    res.status(200).send(req.auth)
  } catch (error) {
    res.status(500).send(error)
  }
}