import config from "./app/config.js";
import express from 'express'
import cors from 'cors';
import userRouter from './app/routes/user.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('app'))
app.use(express.urlencoded({ extended: false }))


// RUTAS DE USUARIO
app.use(userRouter)


// LEVANTAR APP
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/index.html')
})

app.listen(config.port, () => {
  console.log('server run on port: ' + config.port);
  console.log('http://localhost:' + config.port + '/');
})