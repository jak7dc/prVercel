import { createClient } from "@libsql/client";
import config from "../config.js";

const client = createClient({
  url: config.url,
  authToken: config.dbToken
})

export { client }