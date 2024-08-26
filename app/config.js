import { config } from "dotenv";

config()

export default {
  port: process.env.PORT || 3000,
  prEntorno: process.env.PR_ENTORNO || 'no funciono :(',
  dbToken: process.env.DB_TOKEN || '',
  url: process.env.URL || ''
}