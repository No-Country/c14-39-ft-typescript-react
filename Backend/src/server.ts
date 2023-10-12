// Tipado para express
import express,{Express} from 'express'
import {initServer} from './db'

// Rutas principal
import indexRoutes from '../src/routes/indexRoutes'

// dependencias node
const app: Express = express()
import cors from 'cors'


app.use(express.json())
app.use(cors())

initServer(app);

app.use('/api', indexRoutes)

export default app