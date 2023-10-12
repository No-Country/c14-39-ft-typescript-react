import express from 'express'
import '../src/db'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello world')
})

export default app