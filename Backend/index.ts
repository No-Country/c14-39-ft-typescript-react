import app from './src/server'

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server stared on port ${PORT}`)
})