import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://diacs-pruebas-jak7dc.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ0NDA0MTUsImlkIjoiNWJiMmYwOTMtNjRlYy00YWVlLWE1NjgtYWJmMmY2NjQzYWVhIn0._CEV2qQ1lDqZiaBr5gGvdg6l4MkuAoS-qYHKmSyoTXZKY_-XvBFQ4iZi6NwhZKCt4cZIbHwZAauHCV2dUrXUCQ"
})

export { client }