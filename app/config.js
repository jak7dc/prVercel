import { config } from "dotenv";

config()

export default {
  port: process.env.PORT || 3000,
  dbToken: process.env.DB_TOKEN || '',
  url: process.env.URL || '',
  strKey: process.env.STR_KEY || '',
}