import config from "./app/config.js";
import express from 'express'
import cors from 'cors';
import userRouter from './app/routes/user.routes.js'
import categoryRouter from './app/routes/inventary.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('app'))
app.use(express.urlencoded({ extended: false }))


app.use(categoryRouter)
// RUTAS DE USUARIO
app.use(userRouter)

// POR ALGUN MOTIVO NO FUNCIONA LA TRAIDA DE LA PAGINA HTML XD
app.get('/', (req, res) => {
  const htmlResponse = `
  <html>
    <head>
      <title>NodeJs y Express en Vercel</title>
    </head>
    <body>
      <h1>
        prueba de vercel
      </h1>
      <p>
        inplementacion de users,
        y archivo vercel.json
        variables de entorno
      </p>
    </body>
  </html>
`;
  res.send(htmlResponse);
})

// LEVANTAR APP
app.listen(config.port, () => {
  console.log('server run on port: ' + config.port);
  console.log('http://localhost:' + config.port + '/');
})